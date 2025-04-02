import { RouteObject } from "react-router-dom";

import ProfilePage from "./pages/NewProfilePage/ProfilePage";
import MainPage from "./pages/mainPage/MainPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

export const mainRoutes: RouteObject[] = [
    {
        path: 'profile/',
        element: <ProfilePage />,
    },
    {
        path: 'main/',
        element: <MainPage />,
    },
    {
        path: 'settings/',
        element: <SettingsPage />
    },
];