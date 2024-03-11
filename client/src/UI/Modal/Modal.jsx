import React from 'react';
import { Button, Modal } from 'antd';

export const ModalWindow = ({ title, children, visible, setVisible }) => {
    const handleOk = () => {
        setVisible(false);
    };

    return (
        <Modal
            title={title}
            open={visible}
            onOk={handleOk}
            footer={[
                <Button key="ok" type="primary" onClick={handleOk}>
                    OK
                </Button>,
            ]}
        >
            <p>{children}</p>
        </Modal>
    );
};
