import React from "react";
import styles from './Button.module.css';

type ButtonProps = {
    onClick: () => void;
    title: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, title, disabled = false }) => {
    return (
        <button id="changePokemonButton" onClick={onClick} title={title} disabled={disabled} className={styles.button}>
            {title}
        </button>
    );
}

export default Button;