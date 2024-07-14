import React from 'react';
import styles from './LoadingPokemonCard.module.css';

const LoadingPokemonCard: React.FC = () => {
    return (
        <div className={styles.card} data-testid="loading-pokemon-card">
            <span data-testid="loader" className={styles.loader}></span>
        </div>
    );
}

export default LoadingPokemonCard;