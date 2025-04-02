import { RouteObject } from "react-router-dom";

import LocalizationLayout from "../../../common/pages/LocalizationLayout/LocalizationLayout.tsx";
import InvoicePage from "./InvoicePage";
import InvoiceForm from "./components/InvoiceForm";

export const invoiceRoutes: RouteObject[] = [
    {
        path: 'invoice/',
        element: <LocalizationLayout />,
        children: [
            {
                index: true,
                element: <InvoicePage />
            },
            {
                path: 'create/',
                element: <InvoicePage />,
                children: [
                    {
                        index: true,
                        element: <InvoiceForm />
                    }
                ]
            },
            {
                path: ':id/',
                element: <InvoicePage />,
                children: [
                    {
                        index: true,
                        element: <InvoiceForm />
                    }
                ]
            }
        ]
    }
];