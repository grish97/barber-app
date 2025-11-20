import './MainLayout.css';
import { useContext, useEffect, useState } from 'react';

import { Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

export const routing = [
    {
        path: '/services',
        name: 'Services'
    },
    {
        path: '/barbers',
        name: 'Barbers'
    }
];

export const MainLayout = () => {
    const { setAuth } = useContext(AuthContext);

    const [currentPage, setCurrentPage] = useState('/');
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setAuth({
                firstName: 'John',
                lastName: 'Doe',
                accessToken: 'asdasdasodhajksd8687689689687asdasd'
            });
        }, 2000);
    }, [])

    return (
        <section id='main-layout'>
            <div id='navbar'>
                <div className='navbar-log'>
                    <p onClick={() => setCurrentPage('/')}>Navbar</p>
                </div>

                <nav>
                    <ul>
                        {routing.map((route, index) => (
                            <li
                                key={index}
                                onClick={
                                    () => navigate(route.path)
                                }
                                className={currentPage === route.path ? 'active' : ''}
                            >
                                {route.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div id='content'>
                <Outlet />
            </div>
        </section>
    );
};