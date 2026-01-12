'use client'
import React, {useState} from 'react';
import {Form, message, Modal} from 'antd'

import Button from "@/shared/ui/Button/Button.jsx";
import ContactForm from "@/widgets/ContactForm/ContactForm.jsx";

import './MaritimeShipSupply.scss';

const MaritimeShipSupply = () => {
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
                    <h1 className='hero_title'>Maritime Ship Supply</h1>
                </div>
            </div>
            <div className='main_content'>
                <div className='main_intro'>
                    <h2  className='main_intro_title'>Liberia Duty Free</h2>
                    <div className='line'/>
                    <p className='main_intro_desc'>
                        Through a dedicated ship store at Monrovia Freeport, Liberia Duty Free supplies duty-free goods to vessels engaged in international navigation, including alcohol, tobacco, confectionery, and selected crew goods under customs supervision. </p>
                </div>
            </div>
        </div>
    );
};

export default MaritimeShipSupply;