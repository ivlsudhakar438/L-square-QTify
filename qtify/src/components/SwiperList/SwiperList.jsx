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
      spaceBetween={0}
      slidesPerView={7}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        albums.map((album) => (
          <SwiperSlide sx={{textAlign:'left' }}>
            <AlbumCard
              key={album.id}
              album={album}
              sx={{textAlign:'left' }}
            />
          </SwiperSlide>
        ))
      }     
    </Swiper>
  )
}
export default SwiperList;