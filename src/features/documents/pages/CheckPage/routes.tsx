import { RouteObject } from "react-router-dom";

import LocalizationLayout from "../../../common/pages/LocalizationLayout/LocalizationLayout.tsx";
import CheckPage from "./CheckPage";
import CheckForm from "./components/CheckForm";

export const checkRoutes: RouteObject[] = [
    {
        path: 'check/',
        element: <LocalizationLayout />,
        children: [
            {
                index: true,
                element: <CheckPage />
            },
            {
                path: 'create/',
                element: <CheckPage />,
                children: [
                    {
                        index: true,
                        element: <CheckForm />
                    }
                ]
            },
            {
                path: ':id/',
                element: <CheckPage />,
                children: [
                    {
                        index: true,
                        element: <CheckForm />
                    }
                ]
            }
        ]
    }
];