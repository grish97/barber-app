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
    const { username } = useContext(AuthContext);

    const [currentPage, setCurrentPage] = useState('/');
    const navigate = useNavigate();

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

                        <li>{username}</li>
                    </ul>
                </nav>
            </div>

            <div id='content'>
                <Outlet />
            </div>
        </section>
    );
};