import PhoneForm from "./PhoneForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Gemini Clone Login
        </h1>
        <PhoneForm />
      </div>
    </div>
  );
}