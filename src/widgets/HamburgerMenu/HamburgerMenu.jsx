'use client'
import React, { useState } from 'react';
import { Menu } from 'antd';

import HamburgerIcon from '@/shared/images/hamburger.svg';
import {usePathname, useRouter} from "next/navigation";

import './HamburgerMenu.scss';
import Image from "next/image";

function getItem(
    label,
    key,
    icon,
    children,
) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const routesTitlesMobile = {
    '/': 'Home',
    '/about': 'About us',
    '/operations': 'Operations',
    '/product_categories': 'Product Categories',
    '/partners': 'Partners',
    '/contact': 'Contact',
    '/logistics-supply-chain': 'Logistics Supply Chain',
    '/channels': 'Channels',
    '/compliance-customs': 'Compliance Customs',
    '/maritime-ship-supply': 'Maritime Ship Supply',
    '/real-time-stock-visibility': 'Real Time Stock Visibility',
    '/temperature-humidity-control': 'Temperature Humidity Control',
};


const menuItems= Object.entries(routesTitlesMobile).map(
    ([path, title]) => getItem(title, path, ),
);

export const HamburgerMenu = () => {
    const pathname = usePathname();

    const navigation = useRouter();
    const activeMenuKeys = [
        '/about',
        '/operations',
        '/product_categories',
        '/partners',
        '/contact',

        '/logistics-supply-chain',
        '/channels',
        '/compliance-customs',
        '/maritime-ship-supply',
        '/real-time-stock-visibility',
        '/temperature-humidity-control',
    ]

    const isActive = activeMenuKeys.some((key) => pathname.startsWith(key));

    const pushLinks = (e) => {
        navigation.push(e.key);
    };
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='hamburger-menu'>
            {isOpen && <div className='backdrop' onClick={() => setOpen(false)} />}
            <button onClick={() => setOpen(!isOpen)} className={`hamburger-button`}>
                {!isOpen && <Image src={HamburgerIcon} alt='hamburger'/>}
            </button>
            <div
                className={`panel ${isOpen ? 'open' : 'close'}`}
                onClick={() => setOpen(!isOpen)}
            >
                <div>
                    <Menu
                        theme='light'
                        mode='inline'
                        defaultSelectedKeys={[pathname]}
                        selectedKeys={
                            isActive
                                ? activeMenuKeys.filter((key) => pathname.startsWith(key))
                                : [pathname]
                        }
                        defaultOpenKeys={isActive ? activeMenuKeys : [pathname]}
                        items={menuItems}
                        onClick={pushLinks}
                    />
                </div>
            </div>
        </div>
    );
};
