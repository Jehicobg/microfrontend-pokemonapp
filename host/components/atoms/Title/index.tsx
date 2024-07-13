import React from 'react';
import styles from './Title.module.css';

type TitleProps = {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className={styles.containerTitle}>
            <h1 className={styles.textTitle}>{text}</h1>
        </div>
    )
}

export default Title;