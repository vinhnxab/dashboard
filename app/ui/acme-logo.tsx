import { roboto } from '@/app/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
      <>
      <Image
        src="/logo-ct.webp"
        width={32}
        height={32}
        className="navbar-brand-img h-100"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        <span className="ms-1 font-weight-bold text-white fs-5 text-center">Material Design</span>
        
      </>
  );
}
