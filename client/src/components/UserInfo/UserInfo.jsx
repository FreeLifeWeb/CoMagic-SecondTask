import React from 'react';
import { Card } from 'antd';
import styles from './UserInfo.module.css';

export const UserInfo = ({ user }) => (
    <Card
        title={`Informations about ${user?.email}`}
        bordered={false}
        style={{
            width: 450,
            backgroundColor: 'rgb(245, 245, 245)',
        }}
    >
        <p>
            Born:{' '}
            <span className={styles.informationContent}>{user?.born}</span>
        </p>
        <p>
            Workplace:{' '}
            <span className={styles.informationContent}>{user?.workplace}</span>
        </p>
        <p>
            Education:{' '}
            <span className={styles.informationContent}>{user?.education}</span>
        </p>
        <p>
            Marital Status:{' '}
            <span className={styles.informationContent}>
                {user?.maritalStatus}
            </span>
        </p>
        <p>
            Address:{' '}
            <span className={styles.informationContent}>{user?.address}</span>
        </p>
    </Card>
);
