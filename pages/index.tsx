import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen relative bg-murPrimary flex flex-col">
      <section className="flex items-center justify-center h-full w-full desktop:max-h-[80px] flex-col relative">
        <Image src="/static/image/main.png" alt="메인 이미지" height={300} width={140} />
      </section>
      <section className="absolute left-0 bottom-0 w-full flex justify-center items-center mt-auto mb-10 gap-2">
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
    </main>
  );
}
