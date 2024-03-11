import { Breadcrumb, Layout, theme, Row, Col, Space } from 'antd';

import { AvatarIcon } from '../../UI/Avatar/Avatar';
import { UserInfo } from '../UserInfo/UserInfo';
import { Frends } from '../Frends/Frends';
import { News } from '../News/News';
import { MYTitle } from '../../UI/Title/Title';
import usersStore from '../../store/usersStore';

const { Content, Footer } = Layout;

export const UserAcccount = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const currentUser = usersStore.infoAboutCurrentUser();
    // console.log(currentUser);
    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                <>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>
                            <AvatarIcon />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{currentUser?.email}</Breadcrumb.Item>
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
                                    <UserInfo user={currentUser} />
                                    <Frends />
                                </Space>
                            </Col>
                            <Col span={12}>
                                <MYTitle>News about your frends:</MYTitle>
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
        </Layout>
    );
};
