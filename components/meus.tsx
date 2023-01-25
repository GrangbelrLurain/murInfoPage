import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const useMenus = () => {
  const { data } = useSWR('/api/menus');
  return { data };
};

const Menus = () => {
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
    <section className="overflow-hidden">
      <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 1000, pauseOnMouseEnter: true, }}>
        {menuList.map((list: any, index: number) => (
          <SwiperSlide key={index}>
            <p className="text-murSecondary text-center">{list?.이름?.title[0]?.text?.content}</p>
            <div className="text-murSecondary flex justify-center gap-2 font-thin">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Menus;
