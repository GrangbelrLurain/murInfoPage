import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import noImage from '@/public/static/image/menu/null.png';
import Image from 'next/image';
import React from 'react';

const useMenus = () => {
  const { data } = useSWR('/api/menus');
  return { data };
};

const Menus = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { data } = useMenus();
  const filterMenuList = () => {
    const menus = data?.response?.results;
    if (menus) {
      const properties = menus.map((datas: any) => datas.properties);
      return properties.filter((datas: any) => datas.진열.checkbox);
    }
    return null;
  };
  const menuList = filterMenuList();
  console.log(menuList);
  if (!menuList) {
    return <section>로딩중입니다.</section>;
  }
  return (
    <section className={`overflow-hidden w-full max-w-[1200px] mx-auto ${className}`} {...props}>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
        }}
        autoplay={{ delay: 1000, pauseOnMouseEnter: true }}
        loop
      >
        {menuList.map((list: any, index: number) => (
          <SwiperSlide key={index}>
            <article className="flex flex-col items-center">
              <figure>
                <Image
                  src={!!list?.이미지?.files[0]?.file?.url ? list?.이미지?.files[0]?.file?.url : noImage.src}
                  alt="상품 이미지"
                  width={100}
                  height={100}
                />
              </figure>
              <p className="text-murSecondary text-center">{list?.이름?.title[0]?.text?.content}</p>
              <div className="text-murSecondary flex justify-center gap-2 font-thin text-sm">
                {list?.단위1?.rich_text.length && list?.price1?.number ? (
                  <p>
                    {list?.단위1?.rich_text[0].text.content} : {list?.price1?.number}원
                  </p>
                ) : null}
                {list?.단위2?.rich_text.length && list?.price2?.number ? (
                  <p>
                    {list?.단위2?.rich_text[0].text.content} : {list?.price2?.number}원
                  </p>
                ) : null}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Menus;
