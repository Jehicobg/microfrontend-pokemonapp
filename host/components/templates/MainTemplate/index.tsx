import React from 'react';
import Button from '@/components/atoms/Button';
import RemoteComponentContainer from '@/components/organisims/RemoteComponentContanier';
import styles from './MainTemplate.module.css';
import Title from '@/components/atoms/Title';

type MainTemplateProps = {
    handleButtonClick: () => void;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ handleButtonClick }) => {
    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <Title text='Pokemon App Challenge' />
                <Button onClick={handleButtonClick} title='Cambiar pokemon' />
                <RemoteComponentContainer />
            </div>
        </main>
    );
};

export default MainTemplate;
