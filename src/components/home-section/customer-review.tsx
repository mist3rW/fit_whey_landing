import { CircleCheck, Star } from 'lucide-react';
import placeholder from '../../assets/profile-placeholder.png';
import { Button } from '../ui/button';
import productPlaceholder from '../../assets/place-holder3.png';
import likeIcon from '../../assets/icons/like-icon.svg';
import likeIconActive from '../../assets/icons/like-icon-active.svg';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export default function CustomerReview() {
  return (
    <section className="">
      <div className="flex justify-between items-center ">
        <div>
          <p className="text-xl font-bold py-4">Customer Review</p>
          <div className="flex gap-2">
            <div className="flex ">
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            </div>
            <p className="text-yellow-400 font-bold">4/5</p>
            <p className="font-thin text-gray-500">(200 Reviews)</p>
          </div>
        </div>
        <div>
          <Dialog>
            <DialogTrigger className="text-white bg-orange-500 px-8 py-1 rounded-md ">
              Write <br /> Review
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Review Our Product</DialogTitle>
                <DialogDescription>
                  <div className="flex py-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="w-5 h-5 cursor-pointer" />
                    ))}
                  </div>
                  <textarea
                    name=""
                    id=""
                    rows={4}
                    className="w-full border"
                  ></textarea>
                  <Button variant="outline" size="sm" disabled>
                    Submit
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="py-4 flex flex-col mb-10">
        {reviewData.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}

type ReviewCardProps = {
  review: {
    name: string;
    review: string;
    isVerified?: boolean;
    like: number;
    orderId?: number;
    product?: string;
    flavour?: string;
    attachment?: boolean;
  };
};

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex gap-2 w-full  px-2 border-b py-3">
      <div className="pt-2">
        <img
          src={placeholder}
          alt="user pro file"
          className="object-cover w-10 h-10  rounded-full"
        />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex w-full justify-between">
          <p className="font-bold">{review.name}</p>
          {review.like > 0 ? (
            <div className="flex gap-2">
              <img src={likeIconActive} alt="like icon" />
              <p className="text-blue-600">{review.like}</p>
            </div>
          ) : (
            <div className="flex gap-2">
              <img src={likeIcon} alt="like icon" />
              <p className="text-gray-400">0</p>
            </div>
          )}
        </div>
        <div className="flex ">
          <Star className="w-4 h-4 fill-yellow-400 stroke-none" />
          <Star className="w-4 h-4 fill-yellow-400 stroke-none" />
          <Star className="w-4 h-4 fill-yellow-400 stroke-none" />
          <Star className="w-4 h-4 fill-yellow-400 stroke-none" />
          <Star className="w-4 h-4 fill-yellow-400 stroke-none" />
        </div>
        <div className=" text-xs flex items-center">
          <p className="text-gray-400">12 March 2022</p>
          {review.isVerified && (
            <p className="flex text-green-400">
              <span className="text-gray-400">&nbsp;|&nbsp;</span>
              <CircleCheck className="w-4 h-4 fill-green-400 stroke-white" />
              Verified Buyer
            </p>
          )}
        </div>
        <div>
          {review.flavour && (
            <p className="text-sm text-gray-400 border-l-4 pl-2 border-l-red-500">
              {review.flavour}
            </p>
          )}
          <p className="text-sm font-thin my-4">{review.review}</p>
          {review.attachment && (
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: 6 }).map((_, index) => (
                <img
                  key={index}
                  src={productPlaceholder}
                  alt="review product image"
                  className="object-cover w-20 h-20"
                />
              ))}
            </div>
          )}

          <div>
            {review.orderId && (
              <p className="text-right text-orange-500 text-xs my-2 ">
                Order ID: {review.orderId}
                {review.product && (
                  <p className="inline-block">
                    &nbsp;|&nbsp;Product {review.product}
                  </p>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const reviewData = [
  {
    name: 'Barack Obama',
    review:
      'Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te dfdf dfsdfdf',
    isVerified: true,
    like: 0,
    orderId: 0o123456,
    product: '1 of 2',
    flavour: 'Villa Milkshake',
    attachment: true,
  },
  {
    name: 'Onitsuka Tiger',
    review:
      'Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te dfdf dfsdfdf',
    isVerified: false,
    like: 0,
  },
  {
    name: 'Steve Jobs',
    review:
      'Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te dfdf dfsdfdf',
    isVerified: true,
    like: 3,
    orderId: 0o123456,
  },
  {
    name: 'Steve Jobs',
    review:
      'Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te dfdf dfsdfdf',
    isVerified: true,
    like: 3,
    orderId: 0o123456,
    product: '1 of 2',
    flavour: 'Villa Milkshake',
  },
];
