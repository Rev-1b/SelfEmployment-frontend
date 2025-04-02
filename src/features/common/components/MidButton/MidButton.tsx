import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { getButtonStyles } from './MidButton.styles.ts';

interface MidButtonProps extends ButtonProps {
    children: React.ReactNode;
    isSubmit?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
}

export const MidButton: React.FC<MidButtonProps> = ({
    children,
    isSubmit,
    disabled,
    onClick,
    variant = 'primary',
    ...props
}) => {
    return (
        <Button
            type={isSubmit ? 'submit' : 'button'}
            sx={getButtonStyles(variant)}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </Button>
    );
};

