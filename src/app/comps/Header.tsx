'use client'

import React, { useState, useEffect } from 'react';

const Header = () => {
    const [selectedPath, setSelectedPath] = useState('Home');

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
                <div className="bg-yellow-500 h-[35px] w-[35px] rounded-full" />
                <div className="font-bold">Lucille's Kitchenette</div>
            </div>

            <div className="flex items-center gap-5">
                <div className={getTabClass('Home')}>Home</div>
                <div className={getTabClass('Menu')}>Menu</div>
                <div className={getTabClass('Reservation')}>Reservation</div>
                <div className={getTabClass('Contact')}>Contact</div>
            </div>

            <div className="flex items-center gap-5">
                <div className="bg-yellow-500 px-5 py-1 rounded-[30px] font-bold">Order</div>
                <div className="bg-yellow-500 h-[30px] w-[30px] rounded-full" />
            </div>
        </div>
    );
};

export default Header;
