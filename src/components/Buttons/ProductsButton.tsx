'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export default function Products() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleRoute = () => {
    if (pathname !== '/') {
      router.push('/');
    } else {
      router.push('/products');
    }
  };

  return (
    <>
      {status === 'authenticated' && (
        <button
          className={
            'bg-light-button dark:bg-dark-button rounded-md p-2 duration-200 hover:scale-110 active:scale-100'
          }
          onClick={handleRoute}
        >
          {pathname === '/products' ? 'Return To Home' : 'Add Products'}
        </button>
      )}
    </>
  );
}
