import backArrowIcon from '../assets/icons/white-back-arrow-icon.svg';
import CartDrawer from './cart/cart-drawer';
import MessageDropDown from './message-dropdown';

export default function Header() {
  return (
    <header className="relative">
      <nav className="flex justify-between items-center py-4 px-8 bg-black/10 shadow-md fixed top-0 left-0 z-40 w-full">
        <div>
          <img src={backArrowIcon} alt="back arrow" />
        </div>
        <div className="flex gap-4 justify-center items-center">
          <CartDrawer />
          <MessageDropDown />
        </div>
      </nav>
    </header>
  );
}
