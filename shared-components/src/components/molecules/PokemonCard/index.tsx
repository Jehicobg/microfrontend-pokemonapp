import React from 'react';
import PokemonName from '../PokemonName';
import PokemonSprite from '../../atoms/PokemonSprite';
import styles from './PokemonCard.module.css';

type PokemonCardProps = {
    pokemon: Pokemon;
};

type Pokemon = {
    name: string;
    sprites: {
        front_default: string;
    };
};

const randomBackground = () => {
    const randomColor = () => Math.floor(Math.random() * 200);

    const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    return color;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div className={styles.pokemonCard} style={{ backgroundColor: randomBackground() }}>
            <PokemonSprite src={pokemon.sprites.front_default} alt={pokemon.name} />
            <PokemonName name={pokemon.name} />
        </div>
    );
};

export default PokemonCard;
