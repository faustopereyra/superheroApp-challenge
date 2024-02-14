import * as React from "react";

const LoadingPlaceholder = () => (
  <div className="md:w-56 md:h-96 w-48 h-72 bg-white p-4 ring-1 ring-zinc-900/5 rounded-lg shadow-lg flex flex-col justify-end">
    <div className="flex-col space-y-4 animate-pulse">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
        <div className="h-2 bg-zinc-200 dark:bg-zinc-700 w-3/4 rounded"></div>
        <div className="h-2 bg-zinc-200 dark:bg-zinc-700 w-3/4 rounded"></div>
      </div>
    </div>
  </div>
);
export default LoadingPlaceholder;
