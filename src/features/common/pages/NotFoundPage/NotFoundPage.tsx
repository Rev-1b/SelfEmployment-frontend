import { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: FC = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                gap: 2
            }}
        >
            <Typography variant="h1" sx={{ fontSize: '96px', fontWeight: 'bold' }}>
                404
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Страница не найдена
            </Typography>
            <Button 
                variant="contained" 
                onClick={() => navigate('/')}
            >
                На главную
            </Button>
        </Box>
    );
};

export default NotFoundPage;