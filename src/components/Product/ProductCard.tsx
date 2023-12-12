import Image from 'next/image';

interface Props {
    imageUrl: string;
    price: number;
}

export default function ProductCard({ imageUrl, price }: Props) {
    return (
        <div className="card bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg overflow-hidden">
            <Image src={imageUrl} alt="Product Image" width={500} height={300} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white"></h2>
            </div>
        </div>
    );
};
