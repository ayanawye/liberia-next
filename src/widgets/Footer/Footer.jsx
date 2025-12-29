'use client'
import React, {useState} from 'react';
import {Form, message, Modal} from "antd";

import Button from "@/shared/ui/Button/Button.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

import './Footer.scss';

const Footer = () => {
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
        <footer className='footer'>
            <div className='container footer_content'>
                <div className='footer_info'>
                    <h3>Contact Us</h3>
                    <p>email</p>
                    <p>email</p>
                    <Button variant='outlined' onClick={showModal}>Get in touch</Button>
                </div>
                <div className='footer_info'>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Vision & Origins</p>
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
        </footer>
    );
};

export default Footer;