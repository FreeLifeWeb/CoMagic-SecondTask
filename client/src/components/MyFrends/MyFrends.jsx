import React from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Layout, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import {
    MessageOutlined,
    PhoneOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { AvatarIcon } from '../../UI/Avatar/Avatar';
import { MessageModal } from '../MessageModal/MessageModal';
import usersStore from '../../store/usersStore';

export const MyFrends = observer(() => {
    const [myFriendsArray, setMyFriendsArray] = React.useState([]);
    const [selectedFriend, setSelectedFriend] = React.useState(null);
    const [messageModalVisible, setMessageModalVisible] = React.useState(false);
    // console.log('selectedFriend', selectedFriend);
    React.useEffect(() => {
        setMyFriendsArray(usersStore.getMyFriends());
    }, []);

    function deleteHandler(id) {
        usersStore.deleteFriend(id);
        setMyFriendsArray(usersStore.getMyFriends());
    }

    const showMessagesModal = (friend) => {
        setSelectedFriend(friend);
        setMessageModalVisible(true);
    };

    const handleCancel = () => {
        setSelectedFriend(null);
        setMessageModalVisible(false);
    };

    return (
        <Layout>
            <Content style={{ margin: '16px 16px' }}>
                {myFriendsArray.length === 0 && (
                    <div>
                        <p style={{ color: 'blue' }}>No friends</p>
                    </div>
                )}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    {myFriendsArray?.map((myFriendArray) => (
                        <Card
                            key={myFriendArray?.id}
                            title={
                                <Space>
                                    <AvatarIcon />
                                    <span>{myFriendArray?.name}</span>
                                </Space>
                            }
                            style={{
                                width: '30%',
                                marginBottom: '20px',
                                cursor: 'pointer',
                            }}
                            hoverable
                            actions={[
                                <MessageOutlined
                                    key="message"
                                    onClick={() =>
                                        showMessagesModal(myFriendArray)
                                    }
                                />,
                                <PhoneOutlined key="phone" />,
                                <DeleteOutlined
                                    key="delete"
                                    onClick={() =>
                                        deleteHandler(myFriendArray.id)
                                    }
                                />,
                            ]}
                        >
                            {myFriendArray?.email}
                        </Card>
                    ))}
                </div>
            </Content>
            <MessageModal
                friend={selectedFriend}
                visible={messageModalVisible}
                onCancel={handleCancel}
            />
        </Layout>
    );
});
