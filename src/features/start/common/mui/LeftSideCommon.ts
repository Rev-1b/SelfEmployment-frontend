import { SxProps, Theme } from '@mui/material';

export const commonStyles: Record<string, SxProps<Theme>> = {
    submitButton: {
        width: "500px",
        background: "radial-gradient(circle at center, #3B3371 0%, #2A2356 100%)",
        color: "white",
        fontSize: "24px",
        fontWeight: "600",
        textTransform: "none",
        borderRadius: "30px",
        boxShadow: "0 0 20px rgba(58, 51, 113, 0.4)",
        transition: "transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease",
        "&:hover": {
            background: "radial-gradient(circle at center, #443C82 0%, #322A66 100%)",
            boxShadow: "0 0 30px rgba(58, 51, 113, 0.7)",
            transform: "scale(1.02)",
        },
        "&:disabled": {
            background: "#CCCCCC",
            color: "#666666",
            boxShadow: "none",
            transform: "none",
        },
    },
    
    linkContainer: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        gap: "30px",
    },

    commonLink: {
        textDecoration: 'none',
        fontWeight: 400,
        color: '#2618B1',
        transform: 'scale(1)',
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
            color: '#022446',
            transform: 'scale(1.04)',
        },
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
    },

    inputFields: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        width: '500px',
    },

    title: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 400,
        fontSize: '24px',
        marginBottom: '40px',
    },
};
