'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "@/lib/validators/authSchema";
import { useAuthStore } from "@/lib/stores/authStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function OtpForm() {
  const router = useRouter();
  const verifyOtp = useAuthStore((state) => state.verifyOtp);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" }
  });

  const onSubmit = async (data: { otp: string }) => {
    const isValid = await verifyOtp(data.otp);
    
    if (isValid) {
      toast.success("Login successful!");
      router.push("/dashboard");
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Enter OTP
        </label>
        <input
          id="otp"
          type="text"
          placeholder="123456"
          maxLength={6}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          {...register("otp")}
        />
        {errors.otp && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.otp.message}
          </p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isSubmitting ? "Verifying..." : "Verify OTP"}
      </button>
      
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="w-full text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Change Phone Number
      </button>
    </form>
  );
}