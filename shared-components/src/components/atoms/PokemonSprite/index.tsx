import React from 'react';
import Image from 'next/image';
import styles from './PokemonSprite.module.css';

type PokemonSpriteProps = {
    src: string | null;
    alt: string;
};

const PokemonSprite: React.FC<PokemonSpriteProps> = ({ src, alt }) => {
    // Función para renderizar el contenido condicionalmente
    const renderContent = () => {
        if (src) return <Image src={src} alt={alt} width={150} height={150} className={styles.image} />;
        // Mostrar esqueleto si src es null
        return <div data-testid='skeleton' className={styles.skeleton}></div>;
    };

    return (
        <div className={styles.containerImage}>
            {renderContent()}
        </div>
    );
};

export default PokemonSprite;
