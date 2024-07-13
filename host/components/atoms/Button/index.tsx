import React from "react";
import styles from './Button.module.css';

type ButtonProps = {
    onClick: () => void;
    title: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
    return (
        <button id="changePokemonButton" onClick={onClick} title={title} className={styles.button}>
            {title}
        </button>
    );
}

export default Button;