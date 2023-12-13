'use client'

// import { useAuth } from "@/components/AuthContext";

export default function Login() {
    const handleLogin = () => {
        console.log('logged in')
    };

    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
}