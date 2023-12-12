import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
    return (
        <div className="m-10">
            <h1 className="text-2xl font-bold mb-5 md:mb-0 md:mr-5">The Wishlist</h1>
            <ThemeSwitcher />
        </div>
    )
}