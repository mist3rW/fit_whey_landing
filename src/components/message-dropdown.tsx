import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import messageIcon from '../assets/icons/message-icon.svg';
import productImage from '../assets/product-mock3.png';

export default function MessageDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <img src={messageIcon} alt="message" className="object-cover w-5 h-5" />
        <span className="absolute items-center justify-center flex -top-2 -right-2 h-4 w-4 bg-red-500 text-white text-xs font-bold rounded-full">
          1
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Your Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex justify-center items-center">
            <img
              src={productImage}
              alt="product image"
              className="object-cover w-20 h-20"
            />
            <div className="flex flex-col">
              <span className="text-xs bg-red-600 text-white text-center rounded-md">
                New Arrival
              </span>
              <p className="font-bold">Baam Mass V1 </p>
              <p className="text-xs">begins at ฿240</p>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
