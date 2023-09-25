import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from "../Button.tsx";

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isCurrentPage = useMemo(() =>
        (path: string) => location.pathname === path ? 'text-dark-blue' : '', [location])

    return (
        <div className="flex justify-between items-center text-xl font-normal">
            <div className="flex-1 text-left">Logo</div>
            <div className="flex-2 flex justify-between  text-gray">
                <button className={isCurrentPage('/')} onClick={() => navigate('/')}>Home</button>
                <button className={isCurrentPage('/about')} onClick={() => navigate('/about')}>About Us</button>
                <button className={isCurrentPage('/pricing')} onClick={() => navigate('/pricing')}>Pricing</button>
                <button className={isCurrentPage('/download')} onClick={() => navigate('/download')}>Download</button>
            </div>
            <div className="flex-1 flex justify-end">
                <Button className="bg-light-blue text-white rounded-full px-6 py-2" onClick={() => navigate("/register")}>
                    Get Started
                </Button>
            </div>
        </div>
    )
}
