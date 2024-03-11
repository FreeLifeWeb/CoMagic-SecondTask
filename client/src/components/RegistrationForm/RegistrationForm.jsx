import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Layout } from 'antd';
import styles from './RegistrationForm.module.css';
import usersStore from '../../store/usersStore';
import { message } from 'antd';
import { Content } from 'antd/es/layout/layout';
var validate = require('validate.js');

export const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const userInfo = {
        born: '1922',
        workplace: 'Frontend Studio',
        education: "Bachelor's Degree in Computer Science",
        maritalStatus: 'Married',
        address: '123 Main Street, Denver, USA',
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async () => {
        const { email, password } = formData;

        const constraints = {
            email: {
                presence: { message: 'Пожалуйста, введите ваш email!' },
                email: { message: 'Пожалуйста, введите корректный email!' },
            },
            password: {
                presence: { message: 'Пожалуйста, введите ваш пароль!' },
                length: {
                    minimum: 6,
                    message: 'Пароль должен содержать не менее 6 символов!',
                },
            },
        };

        const validationResult = validate(formData, constraints);

        if (validationResult) {
            message.error(
                validationResult[Object.keys(validationResult)[0]][0]
            );
            return;
        }

        if (!usersStore.isUserExists(email)) {
            usersStore.addUser(email, password, userInfo);
            message.success('Регистрация успешна!');
            navigate('/');
        } else {
            message.error(
                'Пользователь уже существует. Перенаправляем вас на страницу входа.'
            );
            usersStore.clearCurrentUser();
            navigate('/login');
        }
    };

    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                <div className={styles.container}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        autoComplete="off"
                        onFinish={handleFormSubmit}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Пароль"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.Password
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Registration
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};
