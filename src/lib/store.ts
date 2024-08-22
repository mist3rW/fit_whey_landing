import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  name: string;
  size: string;
  flavor: string;
  quantity: number;
  price: number;
};

type ProductState = {
  quantity: number;
  selectedSize: string;
  selectedFlavor: string;
  regularPrice: number;
  salePrice: number;
  memberPrice: number;
  setQuantity: (quantity: number) => void;
  setSelectedSize: (size: string) => void;
  setSelectedFlavor: (flavor: string) => void;
  setRegularPrice: (price: number) => void;
  setSalePrice: (price: number) => void;
  setMemberPrice: (price: number) => void;
};

export type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (val: boolean) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  quantity: 1,
  selectedSize: '',
  selectedFlavor: '',
  regularPrice: 0,
  salePrice: 0,
  memberPrice: 0,

  setQuantity: (quantity) => set({ quantity }),
  setSelectedSize: (size) => set({ selectedSize: size }),
  setSelectedFlavor: (flavor) => set({ selectedFlavor: flavor }),
  setRegularPrice: (price) => set({ regularPrice: price }),
  setSalePrice: (price) => set({ salePrice: price }),
  setMemberPrice: (price) => set({ memberPrice: price }),
}));

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      cartOpen: false,
      setCartOpen: (val) => set({ cartOpen: val }),
      clearCart: () => set({ cart: [] }),
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) =>
              cartItem.size === item.size && cartItem.flavor === item.flavor
          );
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (
                cartItem.size === item.size &&
                cartItem.flavor === item.flavor
              ) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity + item.quantity,
                };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return {
              cart: [
                ...state.cart,
                {
                  ...item,
                },
              ],
            };
          }
        }),
      removeFromCart: (item) =>
        set((state) => {
          const updatedCart = state.cart.map((cartItem) => {
            if (
              cartItem.size === item.size &&
              cartItem.flavor === item.flavor
            ) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - item.quantity,
              };
            }
            return cartItem;
          });
          return {
            cart: updatedCart.filter((item) => item.quantity > 0),
          };
        }),
    }),
    { name: 'fit-whey-cart' }
  )
);
