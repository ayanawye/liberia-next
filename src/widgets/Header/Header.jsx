'use client'
import React from 'react';
import {HamburgerMenu} from "../HamburgerMenu/HamburgerMenu.jsx";
import {useWindowWidth} from "@/shared/utils";
import Logo from "@/shared/images/logo2.jpeg";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {Menu} from 'antd';

import './Header.scss';
import Link from "next/link";

const Header = () => {
    const width = useWindowWidth();
    const pathname = usePathname();
    const navigation = useRouter();

    const items = [
        {
            label: 'About',
            key: 'SubMenu',
            children: [
                {
                    type: 'group',
                    label: null,
                    children: [
                        { label: 'About us', key: '/about' },
                        { label: 'Logistics Supply Chain', key: '/logistics-supply-chain' },
                        { label: 'Channels', key: '/channels' },
                        { label: 'Compliance Customs', key: '/compliance-customs' },
                        { label: 'Maritime Ship Supply', key: '/maritime-ship-supply' },
                        { label: 'Real Time Stock Visibility', key: '/real-time-stock-visibility' },
                        { label: 'Temperature Humidity Control', key: '/temperature-humidity-control' },
                    ],
                },
                ]
        },
        ]
    const onClick = e => {
        navigation.push(e.key);
    };

    const links = [
        { href: '/operations', label: 'Operations' },
        { href: '/product_categories', label: 'Product Categories' },
        { href: '/partners', label: 'Partners' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <div className='header_content'>
            <div className='container'>
                <header className='header'>
                    <Link href={'/'} className='header_logo'><Image width={80} height={80} src={Logo} alt='logo'/></Link>
                    {width <= 700 ? (
                        <HamburgerMenu/>
                    ) :
                        <>
                            <nav className='header_nav'>
                                <Menu onClick={onClick} mode="horizontal" items={items} />
                                {links.map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={pathname === link.href ? 'active link_header' : 'link_header'}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </>
                    }
                </header>
            </div>
        </div>
    );
};

export default Header;