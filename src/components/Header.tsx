import AuthButton from './Buttons/AuthButton';
import ProductsButton from './Buttons/ProductsButton';
import ThemeSwitcherButton from './Buttons/ThemeSwitcherButton';

export default function Header() {
  return (
    <div className='m-10 flex'>
      <h1 className='mt-5 text-3xl font-bold md:mb-0 md:mr-5'>The Wishlist</h1>
      <div className='absolute right-1 top-1 flex space-x-2 md:right-5'>
        <AuthButton />
        <ProductsButton />
        <ThemeSwitcherButton />
      </div>
    </div>
  );
}
