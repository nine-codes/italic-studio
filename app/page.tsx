import Caribou from '@/components/icons/caribou';
import Dinarica from '@/components/icons/dinarica';
import Finest from '@/components/icons/finest';
import Forbes from '@/components/icons/forbes';
import Jazeera from '@/components/icons/jazeera';
import Logo from '@/components/icons/logo';
import Sportklub from '@/components/icons/sportklub';
import Swiss from '@/components/icons/swiss';
import Overlay from '@/components/overlay';
import Scene from '@/components/scene';

export default function Home() {
  return (
    <>
      <Scene />
      <main className='flex min-h-screen flex-col items-center justify-between p-10 bg-black text-center'>
        <div className='grid gap-8 mb-8 z-10'>
          <h2 className='text-2xl text-[32px]'>Hello, we are</h2>
          <Logo />
        </div>

        <h1 className='text-5xl lg:text-[80px] mb-32 z-10'>
          Digital design & brand agency
        </h1>

        <Overlay />

        <section className='flex items-center justify-between flex-wrap w-full gap-16 z-10'>
          <Dinarica />
          <Swiss />
          <Caribou />
          <Forbes />
          <Finest />
          <Jazeera />
          <Sportklub />
        </section>
      </main>
    </>
  );
}
