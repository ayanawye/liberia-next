'use client'
import React, {useState} from 'react';
import {Form, message, Modal} from 'antd'

import Button from "@/shared/ui/Button/Button.jsx";
import ContactForm from "@/widgets/ContactForm/ContactForm.jsx";

import './TemperatureHumidityControl.scss';

const TemperatureHumidityControl = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success("We'll back to you soon!")

        setTimeout(() => {
            form.resetFields()
        }, 2000)
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className='hero'>
                <div className='container'>
                    <h1 className='hero_title'>Temperature Humidity Control</h1>
                </div>
            </div>
            <div className='main_content'>
                <div className='main_intro'>
                    <h2  className='main_intro_title'>Liberia Duty Free</h2>
                    <div className='line'/>
                    <p className='main_intro_desc'>
                        Specialized infrastructure supports temperature-controlled storage for confectionery and sensitive goods, and humidity-controlled environments for cigars and premium tobacco, with real-time monitoring across the supply chain.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TemperatureHumidityControl;