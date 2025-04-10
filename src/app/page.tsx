'use client';

import Image from "next/image";
import headerOne from '../../assets/landing.jpeg'
import logoImage from '../../assets/LOGO-removebg-preview.png'
import { useRouter } from 'next/navigation'; // <-- This should be 'next/navigation' for App Router

export default function Home() {
  const router = useRouter();

  const routes = {
    'HOME': '/user/home',
    'OUR MENU': '/menu',
    'RESERVATION': '/reservation',
    'ORDER FORM': '/order',
    'FAQS': '/faqs',
    'ABOUT US': '/about',
    'CONTACT US': '/contact',
  };

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={headerOne}
          alt="header background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex  flex-col md:flex-row gap-8 items-center p-8 w-full max-w-6xl px-4">
        <div className="flex-shrink-0 w-full md:w-auto mb-auto">
          <div className="flex justify-center">
            <Image
              src={logoImage}
              alt="logo"
              width={800}
              height={500}
              className="object-contain "
              priority
            />
          </div>
          <p className="text-white text-center text-xl md:text-2xl mt-4 font-bold drop-shadow-lg">
            "MASARAP SA UNANG TINGIN, PAG-KINAIN GUSTO MO NG ULIT-ULITIN"
          </p>
        </div>

        <div className="bg-white bg-opacity-90 flex flex-col gap-4 items-center rounded-xl p-6 shadow-xl w-[500px]">
          {Object.entries(routes).map(([label, path]) => (
            <button
              key={label}
              onClick={() => router.push(path)}
              className="w-full py-5 px-[8rem] bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors font-medium text-lg"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
