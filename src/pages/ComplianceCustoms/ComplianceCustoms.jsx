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
                    <p className='channels_intro_desc'>
                        Governance includes bonded inventory control, customs-approved procedures, restricted sales to eligible customers, anti-diversion policies, and full product traceability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComplianceCustoms;