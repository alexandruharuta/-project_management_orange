import React from 'react';
import classnames from 'classnames';

import { ICardProps } from "./Card.interface.ts";


export const Card: React.FC<ICardProps> = ({ className, children }) => (
    <div className={classnames("bg-light-gray rounded-lg min-h-[455px]", className)}>
        {children}
    </div>
)