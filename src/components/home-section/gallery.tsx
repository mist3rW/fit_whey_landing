import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { galleryImages } from '../../data/gallery';

export default function Gallery() {
  return (
    <div className="h-full  w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {galleryImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div>
              <img
                src={image.img}
                alt="Product Image"
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
