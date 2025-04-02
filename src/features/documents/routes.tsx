import { RouteObject } from "react-router-dom";

import DocumentNavPage from "./pages/DocumentNavPage/DocumentNavPage";
import AgreementSectionPage from "./pages/AgreementSectionPage/AgreementSectionPage";
import AgreementPage from "./pages/AgreementPage/AgreementPage";
import AgreementListPage from "./pages/AgreementListPage/AgreementListPage";

import { additionalRoutes } from "./pages/AdditionalPage/routes";
import { actRoutes } from "./pages/ActPage/routes";
import { invoiceRoutes } from "./pages/InvoicePage/routes";
import { checkRoutes } from "./pages/CheckPage/routes";

import TemplateListPage from "./pages/TemplateListPage/TemplateListPage";
import TemplatePage from "./pages/TemplatePage/TemplatePage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";


export const documentRoutes: RouteObject[] = [
    {
        path: 'documents/',
        element: <DocumentNavPage />,
        children: [
            {
                path: 'agreements/',
                element: <AgreementSectionPage />,
                children: [
                    {
                        index: true,
                        element: <AgreementListPage />,
                    },
                    {
                        path: 'create/',
                        element: <AgreementPage />,
                    },
                    ...additionalRoutes,
                    ...actRoutes,
                    ...invoiceRoutes,
                    ...checkRoutes,
                ]
            },
            {
                path: 'templates/',
                element: <TemplateListPage />,
            },
            {
                path: 'templates/create',
                element: <TemplatePage />,
            },
            {
                path: 'templates/:id',
                element: <TemplatePage />,
            },
            {
                path: 'history/',
                element: <HistoryPage />,
            },
        ]
    }
];