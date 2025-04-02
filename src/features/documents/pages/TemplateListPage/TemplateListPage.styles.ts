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
    fieldsInfo: {
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
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