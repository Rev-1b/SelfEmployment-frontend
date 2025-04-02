import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from 'date-fns/locale';



const LocalizationLayout: FC = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <Outlet />
        </LocalizationProvider>
    );
};

export default LocalizationLayout; 