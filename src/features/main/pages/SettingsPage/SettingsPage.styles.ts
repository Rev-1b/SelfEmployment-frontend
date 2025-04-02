import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    settingsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%'
    },
    settingItem: {
        width: '100%',
        borderRadius: '8px',
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#f5f5f5'
        }
    },
    settingButton: {
        width: '100%',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent'
    },
    settingIcon: {
        marginRight: '12px',
        display: 'flex',
        alignItems: 'center'
    },
    settingContent: {
        padding: '16px',
        borderTop: '1px solid #e0e0e0'
    },

    row: {
        display: 'flex',
        gap: 2,
        // flexDirection: 'column',
    },
    field: {
        // width: '100%',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E0E0',
            },
            '&:hover fieldset': {
                borderColor: '#BDBDBD',
            },
        }
    },
    borderField: {
        maxWidth: '243px',
    },
    submitButton: {
        alignSelf: 'center',
        backgroundColor: '#1976d2',
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        minWidth: 'unset',
        '&:hover': {
            backgroundColor: '#1565c0',
        }
    }
};