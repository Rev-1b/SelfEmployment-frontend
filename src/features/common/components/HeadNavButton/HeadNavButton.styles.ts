import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = { 
    largeButton: {
        padding: '20px 50px',
        width: '375px',
        fontSize: '32px',
        textAlign: 'center',
        fontWeight: '500',
        color: '#000',
        cursor: 'pointer',
    },

    smallButton: {
        padding: '20px 50px',
        width: '286px',
        fontSize: '24px',
        textAlign: 'center',
        fontWeight: '500',
        color: '#000',
        cursor: 'pointer',
    },

    active: {
        borderBottom: '3px solid #3217ca',
    },
    disabled: {
        color: '#999',
        cursor: 'default',
    },
};
