import React from 'react';

interface ButtonProps {
    isLoading: boolean;
    disabled: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ isLoading, disabled, onClick, children }) => {
    return (
        <button onClick={onClick} disabled={isLoading || disabled}>
            {isLoading ? 'Loading...' : children}
        </button>
    );
};

export default Button;