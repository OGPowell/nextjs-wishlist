'use client'

import { useRouter } from "next/navigation";
import { useAuth } from "../Providers/AuthProvider";

export default function Products() {
    const { loggedIn } = useAuth()
    const router = useRouter()

    return (
        <>
            {loggedIn && <button
                className={'p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]'}
                onClick={() => router.push('/products')}
            >
                Add Products
            </button>

            }
        </>
    )
}