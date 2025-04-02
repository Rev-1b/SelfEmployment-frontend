import { RouteObject } from "react-router-dom";

import LocalizationLayout from "../../../common/pages/LocalizationLayout/LocalizationLayout.tsx";
import AdditionalPage from "./AdditionalPage";
import AdditionalForm from "./components/AdditionalForm";

export const additionalRoutes: RouteObject[] = [
    {
        path: 'additional/',
        element: <LocalizationLayout />,
        children: [
            {
                index: true,
                element: <AdditionalPage />
            },
            {
                path: 'create/',
                element: <AdditionalPage />,
                children: [
                    {
                        index: true,
                        element: <AdditionalForm />
                    }
                ]
            },
            {
                path: ':id/',
                element: <AdditionalPage />,
                children: [
                    {
                        index: true,
                        element: <AdditionalForm />
                    }
                ]
            }
        ]
    }
];