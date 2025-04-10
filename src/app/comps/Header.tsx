'use client'

import React, { useState, useEffect } from 'react';
import logoImage from '../../../assets/LOGO.jpg'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [selectedPath, setSelectedPath] = useState('Home');
    const router = useRouter();

    useEffect(() => {
        const path = window.location.pathname;
        if (path === '/' || path === '/home') {
            setSelectedPath('Home');
        } else if (path.includes('menu')) {
            setSelectedPath('Menu');
        } else if (path.includes('reservation')) {
            setSelectedPath('Reservation');
        } else if (path.includes('contact')) {
            setSelectedPath('Contact');
        }
    }, []);

    const getTabClass = (name: string) =>
        selectedPath === name
            ? 'font-bold border-b-2 border-yellow-500 text-yellow-500'
            : 'text-gray-700 cursor-pointer hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500 transition duration-300 ease-in-out';

    return (
        <div className="flex items-center justify-between px-[10%] py-4">
            <div className="flex items-center gap-2">
                <div className="bg-yellow-500 h-[35px] w-[35px] rounded-full relative overflow-hidden">
                    <Image
                        src={logoImage}
                        alt="logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="font-bold text-black mix-blend-multiply">Lucille's Kitchenette</div>
            </div>


            <div className="flex items-center gap-5">
                <div
                    onClick={() => router.push('/user/home')}
                    className={getTabClass('Home')}>Home</div>
                <div
                    onClick={() => router.push('/user/menu')}
                    className={getTabClass('Menu')}>Menu</div>
                <div
                    onClick={() => router.push('/user/reservation')}
                    className={getTabClass('Reservation')}>Reservation</div>
                <div
                    onClick={() => router.push('/user/contact')}
                    className={getTabClass('Contact')}>Contact</div>
            </div>

            <div className="flex items-center gap-5">
                <div className="bg-yellow-500 px-5 py-1 rounded-[30px] font-bold">Order</div>
                <div className="bg-yellow-500 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                </div>
            </div>
        </div>
    );
};

export default Header;
