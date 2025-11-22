import { createBrowserRouter } from 'react-router';

// Layout component
import { MainLayout } from '../layouts/main-layout/MainLayout';
import { PublicLayout } from '../layouts/public/PublicLayout';

// pages
import { ServiceList } from '../pages/services/ServiceList/ServiceList';
import { BarberList } from '../pages/barbers/BarberList';
import { Home } from '../pages/home/Home';
import { SignIn } from '../pages/auth/SignIn';
import { LocalStorageContextProvider } from '../context/LocalStorageContextProvider';

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
                element: (
                    <LocalStorageContextProvider>
                        <BarberList />
                    </LocalStorageContextProvider>
                ),
            }
        ],
    },
    {
        path: '/auth',
        Component: PublicLayout,
        children: [
            {
                path: 'signin',
                Component: SignIn
            },
            {
                path: 'signup',
                Component: null
            }
        ],
    }
]);