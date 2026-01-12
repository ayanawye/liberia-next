import React from 'react';

import Wine from '@/shared/images/wine.svg'
import Image from "next/image";

import './RealTimeStockVisibility.scss';

const RealTimeStockVisibility = () => {
    return (
        <div>
            <div className='products'>
                <div className='container'>
                    <h1 className='products_title'>Real Time Stock Visibility</h1>
                </div>
            </div>
            <div className='products_categories'>
                <div className='products_category'>
                    <h3>The company maintains real-time visibility of bonded inventory across warehouses, freeport facilities, ship supply staging areas, and internal logistics movements, ensuring inventory accuracy, audit readiness, and operational transparency.</h3>
                </div>
            </div>
        </div>
    );
};

export default RealTimeStockVisibility;