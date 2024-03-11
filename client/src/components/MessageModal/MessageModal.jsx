import React, { useState } from 'react';
import { Modal, Input, Button, Spin } from 'antd';
import usersStore from '../../store/usersStore';

export const MessageModal = ({ friend, visible, onCancel }) => {
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    // console.log('friend', friend);
    const handleOk = () => {
        setSending(true);
        try {
            usersStore.addMessage(friend?.id, message);
            setSending(false);
            setMessage('');
            onCancel();
        } catch (error) {
            console.error('Sending message failed:', error);
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <Modal
            open={visible}
            onCancel={() => {
                onCancel();
                setMessage('');
            }}
            footer={[
                <Button key="cancel" onClick={() => onCancel()}>
                    Cancel
                </Button>,
                <Button
                    key="send"
                    type="primary"
                    onClick={handleOk}
                    disabled={!message}
                >
                    Send
                </Button>,
            ]}
        >
            <p>Send a message to {friend?.name}:</p>
            <Input.TextArea
                value={message}
                onChange={handleMessageChange}
                rows={4}
                placeholder="Type your message here"
            />
            {sending && <Spin />}
        </Modal>
    );
};
