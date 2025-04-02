import { FC } from "react";
import { Box } from '@mui/material';
import HeadNavButton from "../../../common/components/HeadNavButton/HeadNavButton.tsx";
import { useLocation, useNavigate } from "react-router-dom";

interface DocumentNavigationProps {
    agreementId?: string; // ID договора, если он уже создан
    onNavigate: (path: string) => void; // Функция для навигации
}

const AgreementNavigation: FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex', gap: '16px' }}>
            <HeadNavButton
                label="Договор"
                size="small"
                state={currentPath.includes('agreement') &&
                    !currentPath.includes('/additional') &&
                    !currentPath.includes('/act') &&
                    !currentPath.includes('/invoice') &&
                    !currentPath.includes('/check') ? 'active' : 'default'}
                onClick={() => navigate('create')}
            // onClick={() => onNavigate(`agreement${agreementId ? `/${agreementId}` : '/create'}`)}
            />
            <HeadNavButton
                label="Приложение"
                size="small"
                state={currentPath.includes('/additional') ? 'active' : 'default'}
                onClick={() => navigate('additional')}
            // onClick={agreementId ? () => onNavigate(`appendix/${agreementId}`) : undefined}

            />
            <HeadNavButton
                label="Акт"
                size="small"
                state={currentPath.includes('/act') ? 'active' : 'default'}
                onClick={() => navigate('act')}
            // onClick={agreementId ? () => onNavigate(`act/${agreementId}`) : undefined}
            />
            <HeadNavButton
                label="Счет"
                size="small"
                state={currentPath.includes('/invoice') ? 'active' : 'default'}
                onClick={() => navigate('invoice')}
            // onClick={agreementId ? () => onNavigate(`invoice/${agreementId}`) : undefined}
            />
            <HeadNavButton
                label="Чек"
                size="small"
                state={currentPath.includes('/check') ? 'active' : 'default'}
                onClick={() => navigate('check')}
            // onClick={agreementId ? () => onNavigate(`check/${agreementId}`) : undefined}
            />
        </Box>
    );
};

export default AgreementNavigation;