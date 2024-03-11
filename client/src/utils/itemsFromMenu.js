import {
    HomeOutlined,
    UserOutlined,
    SearchOutlined,
    CameraOutlined,
    MessageOutlined,
    LogoutOutlined,
    UserAddOutlined,
    LoginOutlined,
} from '@ant-design/icons';
import usersStore from '../store/usersStore';

export const items = (handleLogout) => {
    return usersStore.currentUser
        ? [
              { key: '1', icon: <HomeOutlined />, label: 'My page', path: '/' },
              {
                  key: '2',
                  icon: <UserOutlined />,
                  label: 'Friends',
                  path: '/friendslist',
              },
              {
                  key: '3',
                  icon: <SearchOutlined />,
                  label: 'Search',
                  path: '/search',
              },
              {
                  key: '4',
                  icon: <CameraOutlined />,
                  label: 'My Photo',
                  path: '/photo',
              },
              {
                  key: '5',
                  icon: <MessageOutlined />,
                  label: 'My messages',
                  path: '/chat',
              },
              {
                  key: '6',
                  icon: <LogoutOutlined />,
                  label: 'Logout',
                  onClick: handleLogout,
              },
          ]
        : [
              {
                  key: '1',
                  icon: <UserAddOutlined />,
                  label: 'Registration',
                  path: '/registration',
              },
              {
                  key: '2',
                  icon: <LoginOutlined />,
                  label: 'Login',
                  path: '/login',
              },
          ];
};
