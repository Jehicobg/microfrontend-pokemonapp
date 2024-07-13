import React from 'react';
import styles from './ErrorRemoteLoading.module.css';

type ErrorRemoteLoadingProps = {
    message: string,
    numberApp: number
}

const ErrorRemoteLoading: React.FC<ErrorRemoteLoadingProps> = ({ message, numberApp }) => {
    return (
        <div className={styles.container}>
            <p className={styles.errorMessage}>{message} {numberApp}</p>
        </div>
    );
}

export default ErrorRemoteLoading;