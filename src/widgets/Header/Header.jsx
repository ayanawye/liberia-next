'use client'
import React from 'react';
import {HamburgerMenu} from "../HamburgerMenu/HamburgerMenu.jsx";
import {useWindowWidth} from "@/shared/utils";
import Logo from "@/shared/images/logo2.jpeg";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Menu} from 'antd';

import './Header.scss';
import Link from "next/link";

const Header = () => {
    const width = useWindowWidth();
    const pathname = usePathname();

    console.log(pathname)

    const items = [
        {
            label: (
                <>About
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/>
                    </svg>
                </>
            ),
            key: 'SubMenu',
            children: [
                {
                    type: 'group',
                    label: null,
                    children: [
                        { label: (<Link
                                href={'/about'}
                                className={pathname === '/about' ? 'active link_header' : 'link_header'}>About us</Link>), key: '/about'},
                        { label: <Link
                                href={'/channels'}
                                className={pathname === '/channels' ? 'active link_header' : 'link_header'}>Channels</Link>, key: '/channels' },
                        { label: <Link
                                href={'/real-time-stock-visibility'}
                                className={pathname === '/real-time-stock-visibility' ? 'active link_header' : 'link_header'}>Real Time Stock Visibility</Link>, key: '/real-time-stock-visibility' },
                        { label: <Link
                                href={'/maritime-ship-supply'}
                                className={pathname === '/maritime-ship-supply' ? 'active link_header' : 'link_header'}>Maritime Ship Supply</Link>, key: '/maritime-ship-supply' },
                        { label: <Link
                                href={'/logistics-supply-chain'}
                                className={pathname === '/logistics-supply-chain' ? 'active link_header' : 'link_header'}>Logistics Supply Chain</Link>, key: '/logistics-supply-chain' },
                        { label: <Link
                                href={'/temperature-humidity-control'}
                                className={pathname === '/temperature-humidity-control' ? 'active link_header' : 'link_header'}>Temperature Humidity Control</Link>, key: '/temperature-humidity-control' },
                        { label: <Link
                                href={'/compliance-customs'}
                                className={pathname === '/compliance-customs' ? 'active link_header' : 'link_header'}>Compliance Customs</Link>, key: '/compliance-customs' },
                    ],
                },
                ]
        },
        ]

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
                                <Menu mode="horizontal" items={items} />
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