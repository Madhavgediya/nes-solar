import React, { useRef, forwardRef, Ref } from 'react';
import SwiperCore from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);


// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef<
  HTMLLIElement,
  { number: string; text: string; dataIndex: number }
>(({ number, text, dataIndex }, ref) => {

    
  return (
    <>
      {" "}
      <li
        className="cleaning-text-thumbnail-list transition-all duration-500 ease-linear flex-shrink-0 cursor-pointer"
        ref={ref}
        data-index={dataIndex}
        style={{ transitionDelay: `${dataIndex * 0.1}s` }}
      >
        <div className="cleaning-info-text-thumb-number text-white">{number}</div>
        <div className="cleaning-info-wrap">
          <span className="dot-indicator"></span>
        </div>
        <div className="cleaning-info-text-thumb-caption">
          <div className="cleaning-info-number-text cleaning-info-key-1">
            {text}
          </div>
          <div className="cleaning-info-number-text cleaning-info-key-2"></div>
        </div>
      </li>
    </>
  );
});

interface CommonSwiperProps {
  listItems: Array<{ number: string; text: string }>;
  listItemRefs:any
}

const CleaningSliderComponent: React.FC<CommonSwiperProps> = ({ listItems,listItemRefs }) => {



  return (
    <SwiperReact
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {listItems.map((item, index) => (
        <SwiperSlide key={index}>
          <ListItem
            ref={(el) => el && (listItemRefs.current[index] = el)}
            number={item.number}
            text={item.text}
            dataIndex={index}
          />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination custom-pagination "></div>
    </SwiperReact>
  );
};

export default CleaningSliderComponent;
