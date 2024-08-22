import cartIcon from '../../assets/icons/cart-icon.svg';

import { useCartStore } from '../../lib/store';
import CartItems from './cart-items';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '../ui/drawer';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen } = useCartStore();
  return (
    <Drawer open={cartOpen} onOpenChange={setCartOpen}>
      <DrawerTrigger>
        <div className="relative px-2">
          {cart.length > 0 && (
            <span className="absolute items-center justify-center flex -top-2 -right-2 h-4 w-4 bg-red-500 text-white text-xs font-bold rounded-full">
              {cart.length}
            </span>
          )}

          <img src={cartIcon} alt="cart" className="object-cover w-6 h-6 " />
        </div>
      </DrawerTrigger>
      <DrawerContent className="fixed bottom-0 left-0 max-h-[70vh] min-h-[50vh]">
        <DrawerHeader>
          <DrawerClose className="text-right w-full">X</DrawerClose>
          <div className="flex justify-center">Your Cart Items</div>
        </DrawerHeader>
        <div className="overflow-auto p-4">
          <CartItems />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
