import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen relative bg-murPrimary flex flex-col">
      <section className="flex items-center justify-center h-full w-full max-h-[400px] flex-col relative">
        <p className="font-serif font-bold text-murSecondary text-5xl text-center leading-8">MUR</p>
        <p className="font-serif font-medium text-murSecondary text-sm text-center">Greek yogurt & Kombucha</p>
        <div className="border max-w-[220px] max-h-[220px] w-[50vw] h-[50vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-murSecondary"></div>
      </section>
      빌드 테스트 중입니다.
      <section className="flex justify-center items-center mt-auto mb-10 gap-2">
        <a href="https://naver.me/5OGRubmt" className="relative w-[3rem] h-[3rem] overflow-hidden rounded-2xl">
          <Image src="/static/icons/naver-map-200.png" height={200} width={200} alt="네이버 맵" />
        </a>
        <a href="https://www.instagram.com/mu_r.shop/" className="relative w-[3rem] h-[3rem] overflow-hidden rounded-2xl">
          <Image src="/static/icons/instagram-240.png" height={200} width={200} alt="인스타그램" />
        </a>
        <a href="http://pf.kakao.com/_akbxbxj" className="relative w-[3rem] h-[3rem] overflow-hidden rounded-2xl">
          <Image src="/static/icons/kakao-240.png" height={200} width={200} alt="카카오 채팅" />
        </a>
      </section>
    </main>
  );
}
