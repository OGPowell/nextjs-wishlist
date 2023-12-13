'use client'

import { useAuth } from "../Providers/AuthProvider"

export default function AuthButton() {
    const { loggedIn, logout, login } = useAuth()

    const toggleLogin = () => {
        if (loggedIn) {
            logout()
        } else {
            login()
        }
    }

    return (
        <button
            className={'p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]'}
            onClick={() => toggleLogin()}
        >
            <p>
                {loggedIn ? ('Sign Out') : ('Sign In')}
            </p>
        </button>
    )
}