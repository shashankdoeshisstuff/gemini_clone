'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneSchema } from "@/lib/validators/authSchema";
import { useAuthStore } from "@/lib/stores/authStore";
import CountrySelect from "./CountrySelect";
import { useState } from "react";
import OtpForm from "./OtpForm";
import toast from "react-hot-toast";

export default function PhoneForm() {
  const [showOtp, setShowOtp] = useState(false);
  const setPhone = useAuthStore((state) => state.setPhone);
  const setCountryCode = useAuthStore((state) => state.setCountryCode);
  const [countryCode, setCountryCodeState] = useState("+1");

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: "" }
  });

  const onSubmit = async (data: { phone: string }) => {
    setPhone(data.phone);
    setCountryCode(countryCode);
    
    // Simulate OTP send
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("OTP sent to your phone!");
    setShowOtp(true);
  };

  if (showOtp) {
    return <OtpForm />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Phone Number
        </label>
        <div className="flex">
          <CountrySelect onChange={setCountryCodeState} />
          <input
            id="phone"
            type="tel"
            placeholder="123-456-7890"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("phone")}
          />
        </div>
        {errors.phone && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isSubmitting ? "Sending..." : "Send OTP"}
      </button>
    </form>
  );
}