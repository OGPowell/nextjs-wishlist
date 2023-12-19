export default function SkeletonProductCard() {
    return (
        <div className="card rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse w-full aspect-square relative cursor-pointer">
            <div className="h-3/4 w-full bg-gray-400 dark:bg-gray-600 rounded-t-lg"></div>
            <div className="p-4 absolute bottom-0 left-0 w-full bg-gray-200 dark:bg-gray-800 rounded-b-lg">
                <h3 className="truncate text-xl font-bold mb-2 h-4 bg-gray-400 dark:bg-gray-600 rounded"></h3>
                <p className="text-gray-700 dark:text-gray-500 h-4 bg-gray-400 dark:bg-gray-600 rounded"></p>
            </div>
        </div>
    );
}