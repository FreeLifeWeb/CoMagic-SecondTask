import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { List, Avatar, Badge, Layout } from 'antd';
import usersStore from '../../store/usersStore';
import { Content } from 'antd/es/layout/layout';
import styles from './Chat.module.css';

export const Chat = observer(() => {
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleFriendClick = (friend) => {
        setSelectedFriend(friend);
    };

    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                <div style={{ flex: '1' }}>
                    <h2>Friends</h2>
                    <List
                        dataSource={usersStore.getMyFriends()}
                        renderItem={(friend) => (
                            <List.Item
                                key={friend.id}
                                onClick={() => handleFriendClick(friend)}
                                style={{ cursor: 'pointer' }}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar />}
                                    title={friend.name}
                                />
                                <div>
                                    <Badge
                                        count={
                                            usersStore.getMessages(friend.id)
                                                ?.length || 0
                                        }
                                    />
                                </div>
                            </List.Item>
                        )}
                    />
                </div>

                <div style={{ flex: '2', marginLeft: '20px' }}>
                    {selectedFriend && (
                        <>
                            <h2>Messages with {selectedFriend.name}</h2>
                            <div className={styles.messageContainer}>
                                {usersStore
                                    .getMessages(selectedFriend.id)
                                    ?.map((message) => (
                                        <div
                                            className={styles.message}
                                            key={message.id}
                                        >
                                            {/* <span className={styles.sender}>
                                                {message.sender}:
                                            </span> */}
                                            {message.text}
                                        </div>
                                    ))}
                            </div>
                        </>
                    )}
                </div>
            </Content>
        </Layout>
    );
});
