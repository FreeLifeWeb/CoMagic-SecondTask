import React from 'react';
import { Breadcrumb, Layout, theme, Row, Col, Space, Button } from 'antd';

import { AvatarIcon } from '../../UI/Avatar/Avatar';
import { UserInfo } from '../UserInfo/UserInfo';
import { News } from '../News/News';
import { MYTitle } from '../../UI/Title/Title';
import usersStore from '../../store/usersStore';
import { ModalWindow } from '../../UI/Modal/Modal';

const { Content, Footer } = Layout;

export const UserProfile = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const selectuser = usersStore.getSelectedUser();
    // console.log('selectuser: ' + selectuser);
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    function handleAddFrends(user) {
        usersStore.addFriend(user);
        setIsModalVisible(true);
    }

    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                <>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>
                            <AvatarIcon />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{selectuser?.email}</Breadcrumb.Item>
                        <Button onClick={() => handleAddFrends(selectuser)}>
                            Add to friends
                        </Button>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <Space direction="vertical" size="large">
                                    <UserInfo user={selectuser} />
                                </Space>
                            </Col>
                            <Col span={12}>
                                <MYTitle>{`News about friends ${selectuser?.name}`}</MYTitle>
                                <News />
                            </Col>
                        </Row>
                    </div>
                </>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Social media ©{new Date().getFullYear()} Created by CoMagic
                company
            </Footer>
            /{' '}
            <ModalWindow
                title="Friend Added"
                visible={isModalVisible}
                setVisible={setIsModalVisible}
            >
                {`${selectuser?.name} has been added to your friends list.`}
            </ModalWindow>
        </Layout>
    );
};
