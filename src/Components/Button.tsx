import { ReactNode } from 'react';

interface IButton {
    children: ReactNode;
    className: string;
    onClick?: () => void;
}


export default function Button({ children, className, onClick }: IButton) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}