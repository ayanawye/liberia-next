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
                    Liberia Duty Free operates bonded storage, import consolidation, port handling, secure inventory control, and controlled last-mile delivery aligned with real-time stock tracking.
                </h3>
            </div>
        </div>
    );
};

export default LogisticsSupplyChain;