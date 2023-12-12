import { useAuth } from "@/components/AuthContext";

export default function Login() {
    const { login } = useAuth();

    const handleLogin = () => {
        // Here you would typically handle your login logic,
        // like calling an API to login the user, then call the login function.
        login();
    };

    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
}