export default function PageSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 w-full animate-pulse">
      {/* Hero section skeleton */}
      <div className="flex flex-col items-center mb-24">
        <div className="h-6 w-48 bg-zinc-200 dark:bg-surface-dark-hover rounded-full mb-8" />
        <div className="h-16 w-3/4 max-w-2xl bg-zinc-200 dark:bg-surface-dark-hover rounded-2xl mb-4" />
        <div className="h-16 w-2/3 max-w-xl bg-zinc-200 dark:bg-surface-dark-hover rounded-2xl mb-10" />
        <div className="h-4 w-1/2 max-w-md bg-zinc-200 dark:bg-surface-dark-hover rounded-lg mb-2" />
        <div className="h-4 w-1/3 max-w-sm bg-zinc-200 dark:bg-surface-dark-hover rounded-lg mb-10" />
        <div className="flex gap-3">
          <div className="h-10 w-24 bg-zinc-200 dark:bg-surface-dark-hover rounded-lg" />
          <div className="h-10 w-24 bg-zinc-200 dark:bg-surface-dark-hover rounded-lg" />
          <div className="h-10 w-24 bg-zinc-200 dark:bg-surface-dark-hover rounded-lg" />
        </div>
      </div>

      {/* Grid section skeleton (Skills or Projects) */}
      <div className="mb-10 w-full">
        <div className="h-8 w-40 bg-zinc-200 dark:bg-surface-dark-hover rounded-lg mb-10" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="h-48 bg-zinc-200 dark:bg-surface-dark-hover rounded-2xl" />
          <div className="h-48 bg-zinc-200 dark:bg-surface-dark-hover rounded-2xl" />
          <div className="h-48 bg-zinc-200 dark:bg-surface-dark-hover rounded-2xl hidden md:block" />
          <div className="h-48 bg-zinc-200 dark:bg-surface-dark-hover rounded-2xl hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
