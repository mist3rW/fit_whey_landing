import { useEffect } from 'react';
import { useProductStore } from '../../lib/store';
import { sizes } from '../../data/product';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';

import { formatPrice } from '../../lib/utils';
import { CircleAlert, Star } from 'lucide-react';
import WheyButton from '../whey-button';
import pointIcon from '../../assets/icons/point-clear-icon.svg';
import supplementImg from '../../assets/supplement_fact.webp';

export default function ProductSelection() {
  const {
    setSelectedSize,
    setRegularPrice,
    setSalePrice,
    setMemberPrice,
    regularPrice,
    salePrice,
    memberPrice,
    selectedSize,
  } = useProductStore();

  useEffect(() => {
    if (sizes.length > 0) {
      const defaultSize = sizes[0];
      setSelectedSize(defaultSize.size);
      setRegularPrice(defaultSize.regular_price);
      setSalePrice(defaultSize.sale_price);
      setMemberPrice(defaultSize.member_price);
    }
  }, []);
  return (
    <div className="p-3 space-y-3">
      <h1 className="font-bold text-2xl">BAAM 100% MY WHEY</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="flex ">
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
          </div>
          <p className="font-thin text-gray-500">(200 Reviews)</p>
        </div>
        <div className="text-blue-500 flex gap-2 items-center">
          <img src={pointIcon} alt="point" />
          <p>500</p>
        </div>
      </div>
      <div className="bg-gray-100 w-full h-0.5" />
      <div className="flex gap-2">
        <div>
          <p>Price</p>
          <p className="text-2xl font-bold text-red-500">
            {formatPrice(salePrice)}
            <span className="text-sm line-through text-gray-400 font-medium">
              {formatPrice(regularPrice)}
            </span>
          </p>
        </div>
        <div className="bg-gray-100 min-h-[80%] w-0.5" />
        <div>
          <p>
            Your Price
            <span className="inline-block">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CircleAlert size={16} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="p-2">
                      <p className="font-bold ">Pro Member Price</p>
                      <p>
                        Get special price when you purchase this product as a
                        member
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          </p>
          <p className="text-red-500 text-2xl font-bold">
            {formatPrice(memberPrice)}
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {sizes.map((size) => (
          <WheyButton
            key={size.size}
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
      <Dialog>
        <DialogTrigger className="rounded-md border flex justify-center items-center w-full py-2 text-gray-400 hover:bg-gray-50">
          View Supplement Fact
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supplement Info</DialogTitle>
            <DialogDescription>
              <img src={supplementImg} alt="" />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
