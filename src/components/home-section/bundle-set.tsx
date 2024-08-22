import { ShoppingCart } from 'lucide-react';
import productImg from '../../assets/product-mock3.png';

export default function BundleSet() {
  return (
    <section>
      <div>
        <p className="text-xl font-bold py-4">Bundle Set</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

function ProductCard() {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer shadow-lg w-full gap-2 p-2 rounded-lg">
      <div className="h-36">
        <img
          src={productImg}
          alt="baam mass v1"
          className="object-cover w-full h-full"
        />
      </div>
      <p>Baam Mass V1</p>
      <div className="mt-2">
        <p className=" font-bold text-red-500">
          ฿1,000
          <span className="ml-1 text-xs line-through text-gray-400 font-medium">
            ฿2,000
          </span>
        </p>
      </div>
      <button className="bg-blue-500 rounded-md p-1 self-end">
        <ShoppingCart color="#fff" />
      </button>
    </div>
  );
}
