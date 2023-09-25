import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as classNames from "classnames";
 import Button from "../Button.tsx";

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isCurrentPage = useMemo(() =>
        (path: string) => location.pathname === path ? 'text-light-blue' : '', [location])

    return (
        <div className="flex justify-between items-center text-xl font-normal">
            <div className="flex-1 text-left text-28-34">Logo</div>
            <div className="flex-2 flex justify-between  text-gray">
                <button className={classNames(isCurrentPage('/'), 'text-18-21')} onClick={() => navigate('/')}>Home</button>
                <button className={classNames(isCurrentPage('/about'), 'text-18-21')} onClick={() => navigate('/about')}>About Us</button>
                <button className={classNames(isCurrentPage('/pricing'), 'text-18-21')} onClick={() => navigate('/pricing')}>Pricing</button>
                <button className={classNames(isCurrentPage('/download'), 'text-18-21')} onClick={() => navigate('/download')}>Download</button>
            </div>
            <div className="flex-1 flex justify-end">
                 <Button className="bg-light-blue text-white rounded-full px-6 py-2" onClick={() => navigate("/register")}>
                    Get Started
                </Button> 
            </div>
        </div>
    )
}
