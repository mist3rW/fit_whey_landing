import { useMemo } from 'react';
import { useCartStore } from '../../lib/store';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import emptyCart from '../../assets/animation/empty-box.json';
import { MinusCircle, PlusCircle } from 'lucide-react';
import productImg from '../../assets/product-mock3.png';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table';
import { formatPrice } from '../../lib/utils';
import { Button } from '../ui/button';

export default function CartItems() {
  const { cart, addToCart, removeFromCart } = useCartStore();
  console.log('cart', cart);
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cart]);

  return (
    <motion.div className="flex flex-col items-center">
      {cart.length === 0 && (
        <div className="flex justify-center items-center w-full">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl text-muted-foreground text-center">
              Your cart is empty
            </h2>
            <Lottie className="h-64" animationData={emptyCart} />
          </motion.div>
        </div>
      )}
      {cart.length > 0 && (
        <>
          <div className="max-h-80 overflow-y-auto w-full ">
            <Table className="max-w-2xl mx-auto">
              <TableHeader>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Size & Flavor</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        className="rounded-md w-[48px] h-[48px]"
                        src={productImg}
                        alt={item.name}
                      />
                    </TableCell>

                    <TableCell className="text-xs">{item.name}</TableCell>
                    <TableCell className="text-xs">
                      {item.size},&nbsp;
                      {item.flavor}
                    </TableCell>
                    <TableCell>{formatPrice(item.price)}</TableCell>

                    <TableCell>
                      <div className="flex items-center justify-between">
                        <MinusCircle
                          onClick={() => {
                            removeFromCart({
                              ...item,
                              quantity: 1,
                            });
                          }}
                          className="cursor-pointer hover:text-muted-foreground duration-300 transition-colors"
                          size={14}
                        />
                        <p className="text-md font-bold">{item.quantity}</p>
                        <PlusCircle
                          className="cursor-pointer hover:text-muted-foreground duration-300 transition-colors"
                          onClick={() => {
                            addToCart({
                              ...item,
                              quantity: 1,
                            });
                          }}
                          size={14}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between w-full max-w-2xl mt-2">
            <div>Total Price: {formatPrice(totalPrice)}</div>
            <div>
              <Button>Checkout</Button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
