import { SxProps, Theme } from "@mui/material";


export const styles: Record<string, SxProps<Theme>> = {
    addButton: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mb: 2,
        color: '#1D1D93',
        fontSize: '18px',
        cursor: 'pointer',
        justifyContent: 'flex-start',
        '&:hover': {
            opacity: 0.7
        }
    },
};
