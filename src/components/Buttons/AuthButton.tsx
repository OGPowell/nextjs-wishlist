'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { status } = useSession();

  const toggleLogin = () => {
    if (status === 'authenticated') {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <button
      className={
        'rounded-md bg-slate-200 p-2 duration-200 hover:scale-110 active:scale-100 dark:bg-[#212933]'
      }
      onClick={() => toggleLogin()}
    >
      <p>{status === 'authenticated' ? 'Sign Out' : 'Sign In'}</p>
    </button>
  );
}
