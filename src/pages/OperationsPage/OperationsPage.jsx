import React from 'react';

import './OperationsPage.scss';

const OperationsPage = () => {
    return (
        <div>
            <div className='operations'>
                <div className='container'>
                    <h1 className='operations_title'>Operations</h1>
                </div>
            </div>
            <div className='operations_content'>
                <div className='operations_intro'>
                    <h2 className='operations_intro_title'>Operational model</h2>
                    <div className='line'/>
                    <p className='operations_intro_desc'>
                        Liberia Duty Free operates under a compliance-driven operational model including bonded stock handling, customs-approved import procedures, secure inventory management, documented eligibility verification, and real-time stock visibility across bonded locations.                    </p>
                </div>
            </div>
        </div>
    );
};

export default OperationsPage;