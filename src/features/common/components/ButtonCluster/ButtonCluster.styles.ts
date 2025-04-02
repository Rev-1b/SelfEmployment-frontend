import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'inherit',
    },
    actionButtons: {
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 'auto',
        mb: 4,
    },
};