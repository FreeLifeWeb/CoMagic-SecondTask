import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Input, Card, Layout } from 'antd';
import usersStore from '../../store/usersStore';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

export const SearchUsers = observer(() => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setFilteredUsers(usersStore.allPeoples);
    }, []);

    const handleUserClick = (user) => {
        usersStore.setSelectedUser(user);
        navigate('/user-profile');
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
        const filtered = usersStore.filterUsers(value);
        setFilteredUsers(filtered);
        setSearchTerm('');
    };

    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                <Search
                    placeholder="Enter..."
                    allowClear
                    enterButton="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onSearch={handleSearch}
                    style={{ marginBottom: '20px', marginTop: '20px' }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    {filteredUsers.map((user) => (
                        <Card
                            key={user?.id}
                            onClick={() => handleUserClick(user)}
                            title={user?.name}
                            style={{
                                width: '30%',
                                marginBottom: '20px',
                                cursor: 'pointer',
                            }}
                            hoverable
                        >
                            {user?.email}
                        </Card>
                    ))}
                </div>
            </Content>
        </Layout>
    );
});

export default SearchUsers;
