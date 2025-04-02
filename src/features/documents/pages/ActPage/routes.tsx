import { RouteObject } from "react-router-dom";

import LocalizationLayout from "../../../common/pages/LocalizationLayout/LocalizationLayout.tsx";
import ActPage from "./ActPage";
import ActForm from "./components/ActForm";

export const actRoutes: RouteObject[] = [
    {
        path: 'act/',
        element: <LocalizationLayout />,
        children: [
            {
                index: true,
                element: <ActPage />
            },
            {
                path: 'create/',
                element: <ActPage />,
                children: [
                    {
                        index: true,
                        element: <ActForm />
                    }
                ]
            },
            {
                path: ':id/',
                element: <ActPage />,
                children: [
                    {
                        index: true,
                        element: <ActForm />
                    }
                ]
            }
        ]
    }
];