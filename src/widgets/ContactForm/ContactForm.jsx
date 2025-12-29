'use client'
import React, {useState} from 'react';
import {Form, Input} from "antd";
import Button from "../../shared/ui/Button/Button.jsx";

const { TextArea } = Input;

const ContactForm = (props) => {
    const {form, onFinish} = props;
    const [activeField, setActiveField] = useState(null);

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={true}
        >
            <h2>Contact form</h2>
            <div className='flex'>
                <Form.Item
                    label="Your Name"
                    name="name"
                    rules={[
                        { required: true, message: 'Please enter your name' },
                    ]}
                    className={activeField === 'name' ? 'input_active' : ''}
                >
                    <Input
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        placeholder="Enter your name" />
                </Form.Item>

                <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                    ]}
                    className={activeField === 'email' ? 'input_active' : ''}
                >
                    <Input onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} placeholder="Enter your email" />
                </Form.Item>
            </div>

            <Form.Item
                label="Message"
                name="message"
                rules={[
                    { required: true, message: 'Please enter your message' },
                ]}
                className={activeField === 'message' ? 'input_active' : ''}
            >
                <TextArea onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)} rows={4} placeholder="Enter your message" />
            </Form.Item>

            <Form.Item>
                <Button className='modal_btn' htmlType="submit" variant={'primary'}>
                    Send Message
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;