import AuthButton from "./Buttons/AuthButton";
import ProductsButton from "./Buttons/ProductsButton";
import ThemeSwitcherButton from "./Buttons/ThemeSwitcherButton";

export default function Header() {
    return (
        <div className="flex m-10">
            <h1 className="text-3xl font-bold mb-5 md:mb-0 md:mr-5">The Wishlist</h1>
            <div className="flex absolute top-1 right-1 space-x-2">
                <AuthButton />
                <ProductsButton />
                <ThemeSwitcherButton />
            </div>
        </div>
    )
}
