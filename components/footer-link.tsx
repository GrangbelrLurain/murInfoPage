import Image from 'next/image';

const FooterLink = ({ className }: React.HTMLAttributes<HTMLDivElement>): React.ReactElement => (
  <section className={className}>
    <a href="https://baemin.me/J3vuvD2Ggp" className="relative w-[3rem] h-[3rem] overflow-hidden rounded-2xl">
      <Image src="/static/icons/baemin.png" alt="배민" height={200} width={200} />
    </a>
    <a href="https://naver.me/5OGRubmt" className="relative w-[3rem] h-[3rem] overflow-hidden rounded-2xl">
      <Image src="/static/icons/naver-map-200.png" alt="네이버 지도" height={200} width={200} />
    </a>
    <a href="https://www.instagram.com/mu_r.shop/" className="relative w-[3rem] h-[3rem] overflow-hidden rounded-2xl">
      <Image src="/static/icons/instagram-240.png" alt="인스타그램" height={200} width={200} />
    </a>
    <a href="http://pf.kakao.com/_akbxbxj" className="relative w-[3rem] h-[3rem] overflow-hidden rounded-2xl">
      <Image src="/static/icons/kakao-240.png" alt="카카오 채팅" height={200} width={200} />
    </a>
  </section>
);

export default FooterLink;
