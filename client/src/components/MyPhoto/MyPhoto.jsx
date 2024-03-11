import React from 'react';
import { Card, Layout } from 'antd';
const { Content } = Layout;

export const Photo = () => (
    <Layout>
        <Content
            style={{ margin: '10px 16px', display: 'flex', flexWrap: 'wrap' }}
        >
            {[...Array(10)].map((_, index) => (
                <Card
                    key={index}
                    hoverable
                    style={{
                        width: 240,
                        height: 300,
                        borderRadius: '15px',
                        marginRight: '16px',
                        marginBottom: '16px',
                    }}
                    cover={
                        <img
                            alt={`example-${index}`}
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                    }
                ></Card>
            ))}
        </Content>
    </Layout>
);
