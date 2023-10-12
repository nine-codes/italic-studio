'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Logo from './icons/logo';

export default function Overlay() {
  return (
    <Dialog>
      <DialogTrigger className='border border-white text-2xl lg:text-[32px] py-6 px-20 backdrop-blur-md bg-black/50 mb-40'>
        Work with us
      </DialogTrigger>
      <DialogContent className='w-screen max-w-full h-full'>
        <DialogHeader className='flex justify-between items-center flex-col pb-14 pt-48'>
          <DialogTitle className='text-center text-2xl lg:text-[32px]'>
            Drop us an email or pop in for a coffee. <br /> Our doors are always
            open.
          </DialogTitle>
          <DialogDescription>
            <a
              href='mailto:contact@italicstudio.com'
              className='underline text-[32px] lg:text-[80px] italic text-white'
            >
              contact@studioitalic.com
            </a>
          </DialogDescription>

          <div className='w-[82px]'>
            <Logo />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
