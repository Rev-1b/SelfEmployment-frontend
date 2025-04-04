import { FC } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface NotificationProps {
    open: boolean;
    message: string;
    severity?: 'success' | 'info' | 'warning' | 'error';
    onClose: () => void;
}

const Notification: FC<NotificationProps> = ({
    open,
    message,
    severity = 'info',
    onClose
}) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification; 