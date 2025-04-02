import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        border: '1px solid #ccc',
        borderRadius: 1,
        '& .DraftEditor-root': {
            height: '100%'
        },
        '& .DraftEditor-editorContainer': {
            height: '100%',
            padding: 2,
        },
        '& .public-DraftEditor-content': {
            height: '100%',
            minHeight: '180px'
        }
    },
    toolbar: {
        display: 'flex',
        gap: 1,
        padding: 1,
        borderBottom: '1px solid #ccc',
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
    },
    divider: {
        mx: 1
    }
};