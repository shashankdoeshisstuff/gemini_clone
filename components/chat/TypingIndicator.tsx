export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-6">
      <div className="bg-gray-200 dark:bg-gray-700 rounded-xl p-4">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Gemini is typing...
        </p>
      </div>
    </div>
  );
}