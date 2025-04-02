import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';

import CorePage from './features/start/pages/СorePage/СorePage.tsx';
import CoreNavigationPage from './features/common/pages/CoreNavigationPage/CoreNavigationPage.tsx';

import { mainRoutes } from './features/main/routes.tsx';
import { documentRoutes } from './features/documents/routes.tsx';
import { startRoutes } from './features/start/routes.tsx';
import { customerRoutes } from './features/customers/routes.tsx';

import NotFoundPage from './features/common/pages/NotFoundPage/NotFoundPage.tsx';
import { paymentRoutes } from './features/payments/routes.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <CorePage />,
    children: startRoutes
  },
  {
    path: '/',
    element: <CoreNavigationPage />,
    children: [
      {
        index: true,
        element: <Navigate to='main' replace />
      },
      ...mainRoutes,
      ...documentRoutes,
      ...customerRoutes,
      ...paymentRoutes,
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
]);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
