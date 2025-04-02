import { FC } from "react";
import { Box } from '@mui/material'
import { styles } from './DocumentNavPage.styles.ts'


import ContentBox from "../../../common/components/ContentBox/ContentBox.tsx"
import HeadNavButton from "../../../common/components/HeadNavButton/HeadNavButton.tsx";
import { useNavigate, useLocation, Outlet } from "react-router-dom";


const DocumentNavPage: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <ContentBox>
            <Box sx={styles.navSection}>
                <HeadNavButton
                    label="Договоры"
                    state={
                        location.pathname.startsWith('/documents') &&
                            !location.pathname.startsWith('/documents/templates') &&
                            !location.pathname.startsWith('/documents/history') ? 'active' : 'default'
                    }
                    onClick={() => { navigate('/documents/agreements/') }}
                />
                <HeadNavButton
                    label="Шаблоны"
                    state={location.pathname.startsWith('/documents/templates') ? 'active' : 'default'}
                    onClick={() => { navigate('/documents/templates/') }}
                />
                <HeadNavButton
                    label="История"
                    state={location.pathname.startsWith('/documents/history') ? 'active' : 'default'}
                    onClick={() => { navigate('/documents/history/') }}
                />
            </Box>
            <Box sx={{ marginTop: '40px' }}>
                <Outlet />
            </Box>
        </ContentBox>
    );
};

export default DocumentNavPage;