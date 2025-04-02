import { RouteObject } from "react-router-dom";
import CustomerNavPage from "./pages/CustomerNavPage/CustomerNavPage";
import CustomerListPage from "./pages/CustomerListPage/CustomerListPage";
import CustomerPage from "./pages/CustomerPage/CustomerPage";

export const customerRoutes: RouteObject[] = [
    {
        path: 'customers/',
        element: <CustomerNavPage />,
        children: [
            {
                index: true,
                element: <CustomerListPage />
            },
            {
                path: 'create',
                element: <CustomerPage />
            },
            {
                path: ':id',
                element: <CustomerPage />
            }
        ]
    }
];