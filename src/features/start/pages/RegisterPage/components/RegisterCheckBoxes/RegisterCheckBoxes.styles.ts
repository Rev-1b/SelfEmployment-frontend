import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
    },

    checkboxLinkElement: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    },

    checkboxLink: {
        textDecoration: 'none',
        fontSize: '16px',
        color: '#000',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
            color: '#022446',
        },
    },
};