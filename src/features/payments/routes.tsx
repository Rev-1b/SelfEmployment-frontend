import { RouteObject } from "react-router-dom";
import PaymentNavPage from "./pages/PaymentNavPage/PaymentNavPage";
import PaymentListPage from "./pages/PaymentListPage/PaymentListPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import PaymentStatisticPage from "./pages/PaymentStatisticPage/PaymentStatisticPage";


export const paymentRoutes: RouteObject[] = [
    {
        path: '/payments',
        element: <PaymentNavPage />,
        children: [
            {
                index: true,
                element: <PaymentListPage />
            },
            {
                path: 'create',
                element: <PaymentPage />
            },
            {
                path: ':id',
                element: <PaymentPage />
            },
            {
                path: 'statistic',
                element: <PaymentStatisticPage />,
            }
        ]
    }
];