import { createBrowserRouter } from 'react-router';

// Layout component
import { MainLayout } from '../components/layouts/main-layout/MainLayout';

// pages
import { ServiceList } from '../pages/services/ServiceList/ServiceList';
import { BarberList } from '../pages/barbers/BarberList';
import { Home } from '../pages/home/Home';

// Simple routing
// export const appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />,
//     },
    // {
    //     path: '/services',
    //     element: <ServiceList />,
    // },
    // {
    //     path: '/barbers',
    //     element: <BarberList />
    // }
// ]);

// Layout Routes
export const appRouter = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/services',
                Component: ServiceList,
            },
            {
                path: '/barbers',
                Component: BarberList
            }
        ],
    }
]);