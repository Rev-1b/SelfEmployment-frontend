import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    form: {
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
    },
    row: {
        display: 'flex',
        gap: 2,
    },
    field: {
        flex: 1,
        maxWidth: '375px',
    },
    borderField: {
        maxWidth: '243px',
    },
    customerInfo: {
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
};