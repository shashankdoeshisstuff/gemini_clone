export default function Skeleton() {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-10 w-10"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/4"></div>
      </div>
    </div>
  );
}