import React from 'react';
import styles from './PokemonName.module.css';

type PokemonNameProps = {
    name: string;
}

const PokemonName: React.FC<PokemonNameProps> = ({ name }) => {
    return <div className={styles.containerName}>
        <h2 className={styles.pokemonName}>{name}</h2>
    </div>;
}

export default PokemonName;