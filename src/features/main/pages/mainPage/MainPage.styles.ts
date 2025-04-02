export const styles = {
    mainGrid: {
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        gap: '24px',
    },

    contentSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    midTitle: {
        marginBottom: '8px',
    },

    extendLink: {
        color: '#333',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        cursor: 'pointer',
        transition: 'color 0.2s ease',
        marginTop: '8px',
        '&:hover': {
            color: '#1D1D93',
            textDecoration: 'none',
        }
    }
};
