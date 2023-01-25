import FooterLink from '@/components/footer-link';
import Menus from '@/components/meus';
import Image from 'next/image';
import useSWR from 'swr';

export default function Home() {
  console.log(useSWR('/api/hello'));
  return (
    <main className="h-screen relative bg-murPrimary flex flex-col">
      <section className="flex items-center justify-center h-full w-full max-h-[80px] flex-col relative">
        <Image src="/static/image/main.png" alt="메인 이미지" height={300} width={140} />
      </section>
      <Menus className='mt-4 grow h-full'/>
      <FooterLink className="absolute left-0 bottom-0 w-full flex justify-center items-center mt-auto mb-10 gap-2" />
    </main>
  );
}
