import { SxProps, Theme } from "@mui/material";


export const styles: Record<string, SxProps<Theme>> = {
    form: {
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(40vh - 100px)',
        gap: 6,
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
        width: '243px',
    },
    customerBox: {
        width: '770px',
        display: 'flex',
        gap: 3,
    }
}