export default function Dots({
  count,
  currentIndex,
}: {
  count: number;
  currentIndex: number;
}) {
  return (
    <div className='absolute bottom-0 left-0 flex w-full justify-center space-x-2 p-2'>
      {count > 1 &&
        Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`z-50 h-1 w-1 rounded-full ${
              index === currentIndex
                ? 'bg-light-button dark:bg-dark-button'
                : 'bg-gray-300'
            }`}
          />
        ))}
    </div>
  );
}
