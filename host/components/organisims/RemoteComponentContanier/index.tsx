import React from 'react';
import LoadRemoteComponent from '@/components/molecules/LoadRemoteComponent/LoadRemoteComponent';
import styles from './RemoteComponentContainer.module.css';

const RemoteComponentContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <LoadRemoteComponent appPath="app1/App" />
            </div>
            <div className={styles.item}>
                <LoadRemoteComponent appPath="app2/App" />
            </div>
            <div className={styles.item}>
                <LoadRemoteComponent appPath="app3/App" />
            </div>
        </div>
    );
}

export default RemoteComponentContainer;