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
        'bg-light-button dark:bg-dark-button rounded-md p-2 duration-200 hover:scale-110 active:scale-100'
      }
      onClick={() => toggleLogin()}
    >
      <p>{status === 'authenticated' ? 'Sign Out' : 'Sign In'}</p>
    </button>
  );
}
