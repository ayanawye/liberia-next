'use client'
import React from 'react';
import {Form, message} from 'antd';
import ContactForm from "@/widgets/ContactForm/ContactForm.jsx";
import Map from '@/shared/images/map.png'

import './LogisticsSupplyChain.scss';
import Image from "next/image";

const LogisticsSupplyChain = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success("We'll back to you soon!")

        setTimeout(() => {
            form.resetFields()
        }, 2000)
    };

    return (
        <div>
            <div className='contact'>
                <div>
                    <h1 className='contact_title'>Logistics Supply Chain</h1>
                </div>
            </div>
            <div className='contact_content container'>
                <h3>
                    Business and institutional enquiries are handled on a professional basis only. Access is strictly limited to authorized partners, brand owners, and institutional stakeholders.</h3>
                <div className='contact_details'>
                    <Image src={Map} alt='map'/>
                </div>
                <ContactForm onFinish={onFinish} form={form}/>
            </div>
        </div>
    );
};

export default LogisticsSupplyChain;