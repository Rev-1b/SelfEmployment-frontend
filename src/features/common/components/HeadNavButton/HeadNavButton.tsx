import { FC } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { styles } from './HeadNavButton.styles';

export type ButtonSize = 'large' | 'small';
export type ButtonState = 'active' | 'disabled' | 'default';

interface HeadNavButtonProps {
    label: string;
    size?: ButtonSize;
    state?: ButtonState;
    onClick?: () => void;
}

const HeadNavButton: FC<HeadNavButtonProps> = ({
    label,
    size = 'large',
    state = 'default',
    onClick
}) => {
    const baseStyles: SxProps<Theme> = size === 'large'
        ? styles.largeButton
        : styles.smallButton;

    const stateStyles: SxProps<Theme> = {
        active: styles.active,
        disabled: styles.disabled,
        default: styles.default,
    }[state];

    return (
        <Box
            sx={{ ...baseStyles, ...stateStyles } as SxProps<Theme>}
            onClick={state === "disabled"? undefined: onClick}
        >
            {label}
        </Box>
    );
};

export default HeadNavButton;
