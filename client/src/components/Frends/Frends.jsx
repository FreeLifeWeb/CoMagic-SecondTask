import React from 'react';
import { Card } from 'antd';
import { AvatarIcon } from '../../UI/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import styles from './Frends.module.css';

export const Frends = () => {
    const naigate = useNavigate();
    return (
        <Card
            title="Frends"
            onClick={() => naigate('/friendslist')}
            style={{
                width: 450,
                backgroundColor: 'rgb(245, 245, 245)',
                marginTop: '20px',
                cursor: 'pointer',
            }}
            hoverable
        >
            <div className={styles.containerStyle}>
                <Card.Grid className={styles.gridStyle}>
                    <AvatarIcon />
                </Card.Grid>
                <Card.Grid className={styles.gridStyle}>
                    <AvatarIcon />
                </Card.Grid>
                <Card.Grid className={styles.gridStyle}>
                    <AvatarIcon />
                </Card.Grid>
                <Card.Grid className={styles.gridStyle}>
                    <AvatarIcon />
                </Card.Grid>
                <Card.Grid className={styles.gridStyle}>
                    <AvatarIcon />
                </Card.Grid>
                <Card.Grid className={styles.gridStyle}>
                    <AvatarIcon />
                </Card.Grid>
            </div>
        </Card>
    );
};
