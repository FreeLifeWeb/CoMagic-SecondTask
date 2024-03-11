import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space } from 'antd';

export const AvatarIcon = () => (
    <Space direction="vertical" size={16}>
        <Space wrap size={16}>
            <Avatar shape="square" size={64} icon={<UserOutlined />} />
        </Space>
    </Space>
);
