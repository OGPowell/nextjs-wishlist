export default function SkeletonProductCard() {
  return (
    <div className='card relative aspect-square w-full animate-pulse cursor-pointer rounded-lg bg-gray-200 dark:bg-gray-800'>
      <div className='h-3/4 w-full rounded-t-lg bg-gray-400 dark:bg-gray-600'></div>
      <div className='absolute bottom-0 left-0 w-full rounded-b-lg bg-gray-200 p-4 dark:bg-gray-800'>
        <h3 className='mb-2 h-4 truncate rounded bg-gray-400 text-xl font-bold dark:bg-gray-600'></h3>
        <p className='h-4 rounded bg-gray-400 text-gray-700 dark:bg-gray-600 dark:text-gray-500'></p>
      </div>
    </div>
  );
}
