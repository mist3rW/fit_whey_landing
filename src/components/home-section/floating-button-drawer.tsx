import { Minus, Plus, Star } from 'lucide-react';
import { useState } from 'react';
import { cn, formatPrice } from '../../lib/utils';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import productImg from '../../assets/product-mock3.png';
import { Button } from '../ui/button';
import WheyButton from '../whey-button';
import { flavors, sizes } from '../../data/product';
import { useCartStore, useProductStore } from '../../lib/store';
import { toast } from 'sonner';

export default function FloatingButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    setSelectedSize,
    setRegularPrice,
    setSalePrice,
    setMemberPrice,
    regularPrice,
    salePrice,
    memberPrice,
    selectedSize,
    setSelectedFlavor,
    selectedFlavor,
    setQuantity,
    quantity,
  } = useProductStore();

  const { addToCart } = useCartStore();

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center gap-2 shadow-md p-2 fixed bottom-0 left-0 w-full bg-white pb-4 z-50 ">
        <Star
          onClick={toggleFavorite}
          className={cn(
            'w-8 h-8 stroke-none cursor-pointer',
            isFavorite ? 'fill-yellow-400' : 'fill-gray-300'
          )}
        />
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger className="w-full bg-blue-600 py-2 text-white rounded-md">
            Add to Cart
          </DrawerTrigger>
          <DrawerContent className="">
            <DrawerHeader>
              <DrawerTitle>
                <DrawerClose className="text-right w-full">X</DrawerClose>
                <div className="flex flex-col justify-center items-center md:flex-row gap-4 w-full">
                  <div>
                    <img
                      src={productImg}
                      alt="product image"
                      className="object-cover w-auto h-36"
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-lg font-bold">
                      Baam 100% My Whey
                    </p>
                    <p className="text-gray-400 font-thin text-xs md:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    {regularPrice > 0 && (
                      <div className="my-2">
                        <p className="text-sm md:text-base font-bold">
                          Price: {formatPrice(salePrice)}
                          <span className="text-xs md:text-sm line-through text-gray-400 font-medium ml-2">
                            {formatPrice(regularPrice)}
                          </span>
                        </p>
                        <p className="text-red-500 text-sm md:text-xl font-bold">
                          Your Price: {formatPrice(memberPrice)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </DrawerTitle>
              <DrawerDescription>
                <div className="w-full bg-gray-100 h-0.5" />
                <div className="py-2">
                  <p className="font-bold text-blue-600">
                    Please select your options
                  </p>
                  <p className="text-orange-500 text-right">EXP: 20/2021</p>
                </div>
                <div className="space-y-2 space-x-2">
                  <p className="font-bold">
                    Size
                    <span className="font-thin">(Select 1)</span>
                  </p>
                  <div className="flex gap-2 flex-wrap w-full">
                    {sizes.map((size) => (
                      <WheyButton
                        key={size.size}
                        className="text-xs md:text-base"
                        onClick={() => {
                          setSelectedSize(size.size);
                          setRegularPrice(size.regular_price);
                          setSalePrice(size.sale_price);
                          setMemberPrice(size.member_price);
                        }}
                        isSelected={selectedSize === size.size}
                      >
                        {size.size}
                      </WheyButton>
                    ))}
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-0.5 my-4" />
                <div className="space-y-2 space-x-2">
                  <p className="font-bold">
                    Flavor / Selections{' '}
                    <span className="font-thin">(Select 1)</span>
                  </p>
                  <div className="flex gap-2 flex-wrap w-full ">
                    {flavors.map((flavor) => (
                      <WheyButton
                        key={flavor.title}
                        className="text-xs md:text-base"
                        isNew={flavor.isNew}
                        onClick={() => setSelectedFlavor(flavor.title)}
                        isSelected={selectedFlavor === flavor.title}
                        disabled={flavor.title === 'Cafe Mocha'}
                      >
                        {flavor.title}
                      </WheyButton>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-bold">Quantity</div>
                  <div className="flex items-center justify-stretch my-4 gap-2">
                    <Button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      variant={'secondary'}
                      className="text-primary"
                    >
                      <Minus size={18} strokeWidth={3} />
                    </Button>
                    <Button variant="ghost">{quantity}</Button>
                    <Button
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                      variant={'secondary'}
                      className="text-primary"
                    >
                      <Plus size={18} strokeWidth={3} />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    if (!selectedSize || !selectedFlavor) {
                      toast.error(
                        'Please select both a size and flavor before adding to cart.',
                        {
                          position: 'top-center',
                        }
                      );
                      return;
                    }
                    toast.success(
                      `
                      ${quantity} x
                      ${selectedSize}
                     ${selectedFlavor} Flavor
                       has been added to your cart
                    `
                    );
                    addToCart({
                      name: 'Baam 100% My Whey',
                      quantity,
                      flavor: selectedFlavor,
                      size: selectedSize,
                      price: memberPrice,
                    });
                    setIsDrawerOpen(false);
                  }}
                  className="w-full bg-red-500 hover:bg-red-600"
                  disabled={!selectedSize || !selectedFlavor}
                >
                  Add to cart
                </Button>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
