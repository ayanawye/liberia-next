import React from 'react';
import SwiperComponent from "@/widgets/SwiperComponent/SwiperComponent";

import './ComplianceCustoms.scss';

const ComplianceCustoms = () => {
    return (
        <div>
            <div className='channels'>
                <div className='container'>
                    <h1 className='channels_title'>Compliance Customs</h1>
                </div>
            </div>
            <div className='channels_content'>
                <div className='channels_intro'>
                    <h2 className='channels_intro_title'>Our Long-Term Vision</h2>
                    <div className='line'/>
                    <p className='channels_intro_desc'>Liberia Duty Free is a specialized duty-free and travel retail operator active <span>exclusively in regulated, non-domestic channels</span>. The company operates according to international duty-free best practices with strict anti-diversion discipline and controlled distribution.</p>
                </div>
                <div className='channels_intro'>
                    <h2 className='channels_intro_title'>Build Regulated Ecosystems</h2>
                    <div className='line'/>
                    <p className='channels_intro_desc'>Not opportunistic stores, but structured <span>retail environments</span> that serve long-term development.</p>
                </div>
                <div className='channels_intro'>
                    <h2 className='channels_intro_title'>Bridge Global & Local</h2>
                    <div className='line'/>
                    <p className='channels_intro_desc'>Connect <span>global brands</span> to local cultures through fluency and respect, not speculation.</p>
                    <div className='channels_values'>
                        <div className='channels_value'>
                            <h3>Control</h3>
                            <p>All procurement, trade finance, and logistics are internalized.
                            </p>
                        </div>
                        <div className='channels_value channels_value_right'>
                            <h3>Respect</h3>
                            <p>We adapt to local law and culture — without ever compromising compliance.
                            </p>
                        </div>
                        <div className='channels_value'>
                            <h3>Integrity</h3>
                            <p>We pilot crypto payments, modular stores, and trackable stock flows.</p>
                        </div>
                        <div className='channels_value channels_value_right'>
                            <h3>Equity</h3>
                            <p>We hire locally, co-invest in infrastructure, and build lasting value.</p>
                        </div>
                    </div>
                </div>
                <SwiperComponent/>
            </div>
        </div>
    );
};

export default ComplianceCustoms;