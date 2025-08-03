export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-6xl mb-4">✈️</div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        No trips found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        You haven't planned any trips yet. Start planning your next adventure!
      </p>
    </div>
  );
}
