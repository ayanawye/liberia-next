'use client'
import React, {useState} from 'react';
import {Form, message, Modal} from 'antd'

import Button from "@/shared/ui/Button/Button.jsx";
import ContactForm from "@/widgets/ContactForm/ContactForm.jsx";

import './MainPage.scss';

const MainPage = () => {
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
                    <h1 className='hero_title'>Liberia Duty Free</h1>
                    <Button variant='primary' onClick={showModal}>Contact Us</Button>
                </div>
            </div>
            <div className='main_content'>
                <div className='main_intro'>
                    <h2  className='main_intro_title'>Liberia Duty Free</h2>
                    <div className='line'/>
                    <p className='main_intro_desc'>Liberia Duty Free operates within fully controlled and compliant duty-free environments, serving international travelers, maritime traffic, diplomatic missions, and authorized tax-exempt customers in Liberia. Operations are strictly limited to duty-free, bonded, and tax-exempt channels, ensuring full regulatory alignment, transparent sourcing, and long-term brand integrity.</p>
                </div>
            </div>
            <Modal
                closable={true}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
            >
                <ContactForm onFinish={onFinish} form={form}/>
            </Modal>
        </div>
    );
};

export default MainPage;