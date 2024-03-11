import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Layout } from 'antd';
import styles from './LoginForm.module.css';
import usersStore from '../../store/usersStore';
import { message } from 'antd';
import { Content } from 'antd/es/layout/layout';

export const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async () => {
        const { email, password } = formData;

        if (usersStore.isUserExists(email)) {
            const user = usersStore.users.find(
                (user) => user.email === email && user.password === password
            );
            if (user) {
                message.success('Вход успешен!');
                navigate('/');
            } else {
                message.error('Неверный пароль. Пожалуйста, попробуйте снова.');
            }
        } else {
            message.error(
                'Пользователь не найден. Пожалуйста, зарегистрируйтесь.'
            );
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
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};
