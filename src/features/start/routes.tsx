import { RouteObject } from "react-router-dom";

import AuthPage from "./pages/AuthPage/AuthPage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import PassRecoverPage from "./pages/PassRecoverPage/PassRecoverPage.tsx";

export const startRoutes: RouteObject[] = [
    {
        index: true,
        element: <AuthPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'pass-recovery',
        element: <PassRecoverPage />,
      },
];