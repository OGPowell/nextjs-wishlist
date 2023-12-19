export default function Dots({ count, currentIndex }: { count: number, currentIndex: number }) {
    return (
        <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 p-2">
            {count > 1 && Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className={`h-1 w-1 z-50 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
            ))}
        </div>
    );
}