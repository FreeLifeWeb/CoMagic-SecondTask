import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { items } from '../../utils/itemsFromMenu';
import { action } from 'mobx';
import usersStore from '../../store/usersStore';

const { Sider } = Layout;

export const Navigation = observer(() => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!usersStore.currentUser) {
            navigate('/registration');
        }
    }, []);

    function handleLogout() {
        action(() => {
            usersStore.clearCurrentUser();
        })();
        navigate('/registration');
    }
    return (
        <Sider collapsible>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {items(handleLogout).map((item) => (
                    <Menu.Item
                        key={item.key}
                        icon={item.icon}
                        onClick={item.onClick}
                    >
                        <Link to={item.path}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
});
