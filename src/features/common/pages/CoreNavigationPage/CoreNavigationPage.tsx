import { FC } from "react";
import { Box, TextField } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import { styles } from "./CoreNavigationPage.styles.ts";

import profile from "../../../../assets/sidebarImages/profile.svg";
import customers from "../../../../assets/sidebarImages/customers.svg";
import documents from "../../../../assets/sidebarImages/documents.svg";
import home from "../../../../assets/sidebarImages/home.svg";
import payments from "../../../../assets/sidebarImages/payments.svg";
import exit from "../../../../assets/sidebarImages/exit.svg";
import logo from "../../../../assets/sidebarImages/logo.svg";
import alert from "../../../../assets/sidebarImages/alerts.svg";
import settings from "../../../../assets/sidebarImages/settings.svg";

interface IAsideIcon {
    src: string;
    alt: string;
    history: string;
}

const asideIconsRoutes: IAsideIcon[] = [
    { src: profile, alt: "Profile", history: "profile" },
    { src: home, alt: "Home", history: "main" },
    { src: documents, alt: "Documents", history: "documents/agreements/" },
    { src: customers, alt: "Customers", history: "customers" },
    { src: payments, alt: "Payments", history: "payments" },
];

const CoreNavigationPage: FC = () => {
    const navigate = useNavigate();

    const goOnOtherPage = (history: string) => {
        navigate(history);
    };

    return (
        <Box sx={styles.container}>
            {/* Sidebar */}
            <Box component="aside" sx={styles.sidebar}>
                <Box sx={styles.sidebarContent}>
                    {/* Site Logo */}
                    <Box sx={styles.siteIcon}>
                        <img src={logo} alt="Site Logo" style={{ width: '100%', height: '100%' }} />
                    </Box>

                    {/* Main Navigation Icons */}
                    <Box sx={styles.sidebarMainIcons}>
                        {asideIconsRoutes.map((item, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={item.src}
                                alt={item.alt}
                                sx={styles.sidebarIcon}
                                onClick={() => goOnOtherPage(item.history)}
                            />
                        ))}
                    </Box>

                    {/* Exit Button */}
                    <Box sx={styles.exitButton}>
                        <Box
                            component="img"
                            src={exit}
                            alt="Exit"
                            sx={styles.sidebarIcon}
                            onClick={() => goOnOtherPage("auth")}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Content wrapper */}
            <Box sx={styles.contentWrapper}>
                {/* Header */}
                <Box component="header" sx={styles.header}>
                    <Box sx={styles.headerControls}>
                        <TextField
                            placeholder="Поиск"
                            variant="standard"
                            sx={styles.searchInput}
                        />
                        <Box sx={styles.rightControls}>
                            <Box
                                component="img"
                                src={alert}
                                alt={'Уведомление'}
                                sx={styles.sidebarIcon}
                                onClick={() => goOnOtherPage('alert')}
                            />
                            <Box
                                component="img"
                                src={settings}
                                alt={'Настройки'}
                                sx={styles.sidebarIcon}
                                onClick={() => goOnOtherPage('settings')}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Main content */}
                <Box
                    component="main"
                    sx={styles.mainContent}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default CoreNavigationPage;