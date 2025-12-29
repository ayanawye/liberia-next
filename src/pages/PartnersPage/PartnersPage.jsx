import React from 'react';
import PartnershipSVG from '@/shared/images/partnership.svg'
import Image from "next/image";

import './PartnersPage.scss';

const PartnersPage = () => {
    return (
        <div>
            <div className='partners'>
                <div className='container'>
                    <h1 className='partners_title'>Partners</h1>
                    <p className='partners_desc'>Desc</p>
                </div>
            </div>
            <div className='partners_content container'>
                <h2>Why Partner with <span>LIBERIA DUTY FREE?</span></h2>
                <div className='line'/>
                <p>Join our network of premium brands and unlock new markets across Africa and Indochina</p>
                <div className='partners_content_why'>
                    <div className='partners_content_card'>
                        <Image className='partners_svg' src={PartnershipSVG} alt='PartnershipSVG'/>
                        <h4>Market Access</h4>
                        <p>Reach emerging markets across 6+ strategic locations</p>
                    </div>
                    <div className='partners_content_card'>
                        <Image className='partners_svg' src={PartnershipSVG} alt='PartnershipSVG'/>
                        <h4>Market Access</h4>
                        <p>Reach emerging markets across 6+ strategic locations</p>
                    </div>
                    <div className='partners_content_card'>
                        <Image className='partners_svg' src={PartnershipSVG} alt='PartnershipSVG'/>
                        <h4>Market Access</h4>
                        <p>Reach emerging markets across 6+ strategic locations</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;