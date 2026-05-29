import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import styles from './SwiperList.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

import AlbumCard from "../Card/AlbumCard";

const SwiperList = ({albums = []}) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={5}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1536: {
          slidesPerView: 7,
          spaceBetween: 24,
        },
      }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className={styles.albumsSwiper}
    >
      {
        albums.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard
              album={album}
            />
          </SwiperSlide>
        ))
      }     
    </Swiper>
  )
}
export default SwiperList;