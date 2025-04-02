import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        display: "flex",
        minHeight: "100vh"
    },
    sidebar: {
        width: "180px",
        display: "flex",
        flexDirection: "column",
        background: "#3A3A3E",
        position: "fixed",
        height: "100vh",
        zIndex: 1000
    },
    sidebarContent: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "24px 0",
        alignItems: "center"
    },
    sidebarIcon: {
        width: "60px",
        height: "60px",
        cursor: "pointer",
        transition: "opacity 0.2s ease",
        "&:hover": {
            opacity: 0.8
        }
    },
    sidebarMainIcons: {
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: "center"
    },
    siteIcon: {
        width: "120px",
        height: "120px",
        marginBottom: "48px"
    },
    exitButton: {
        marginTop: "auto",
        marginBottom: "32px"
    },
    contentWrapper: {
        flexGrow: 1,
        marginLeft: "180px",
        display: "flex",
        flexDirection: "column"
    },
    header: {
        height: "120px",
        background: "#2B2B2B",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        position: "sticky",
        top: 0,
        zIndex: 900
    },
    headerControls: {
        display: "flex",
        gap: "16px",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        position: "relative"
    },
    searchInput: {
        border: "none",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        padding: "0 24px",
        width: "720px",
        height: "56px",
        outline: "none",
        color: "#FFFFFF",
        fontSize: "16px",
        transition: "background 0.2s ease",
        "& .MuiInputBase-input": {
            color: "#FFFFFF",
        },
        "& .MuiInputBase-input::placeholder": {
            color: "rgba(255, 255, 255, 0.5)",
            opacity: 1
        },
        "&:hover": {
            background: "rgba(255, 255, 255, 0.15)"
        },
        "&.Mui-focused": {
            background: "rgba(255, 255, 255, 0.15)"
        }
    },
    rightControls: {
        display: "flex",
        gap: "16px",
        position: "absolute",
        right: '140px'
    },
    profileIcon: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#E0E0E0",
        cursor: "pointer"
    },
    settingsIcon: {
        width: "32px",
        height: "32px",
        cursor: "pointer"
    },
    mainContent: {
        flexGrow: 1,
        background: "#FEFEFF",
        padding: "8px"
    },
};