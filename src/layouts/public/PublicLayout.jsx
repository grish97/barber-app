import { Outlet } from 'react-router';
import './PublicLayout.css';

export const PublicLayout = () => {

    return (
        <div className="public-layout">
            <Outlet />
        </div>
    );
};