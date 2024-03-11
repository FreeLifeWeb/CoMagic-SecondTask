import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;
export const MYTitle = ({children}) => (
    <>
        <Title level={3}>{children}</Title>
    </>
);
