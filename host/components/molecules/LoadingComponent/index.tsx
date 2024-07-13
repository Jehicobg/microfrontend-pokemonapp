import React from 'react';
import sytles from './LoadingComponent.module.css';


type LoadingComponentProps = {
    numberApp: number
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ numberApp }) => {
    return (
        <div className={sytles.container}>
            <p className={sytles.loadingMessage}>Cargando aplicación {numberApp}</p>
        </div>
    );
}

export default LoadingComponent;