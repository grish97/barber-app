import './MainLayout.css';
import { routing } from '../../../routing/routing';
import { useState } from 'react';

// pages
import { BarberList } from '../../../pages/barbers/BarberList';
import { ServiceList } from '../../../pages/services/ServiceList/ServiceList';

export const MainLayout = () => {
    const [currentPage, setCurrentPage] = useState('/');

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
                                onClick={
                                    () => setCurrentPage(route.path)
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
                {['/', '/services'].includes(currentPage) ? <ServiceList /> : <BarberList />}
            </div>
        </section>
    );
};