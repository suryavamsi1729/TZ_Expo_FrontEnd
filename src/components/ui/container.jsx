import React from 'react';
import { cn } from '../../lib/utils';

const Container = ({ children, className,...props }) => {
    return (
        <div className={cn(`commonShadow w-auto h-auto mx-auto px-4 rounded-[16px] bg-[#ffffff]`, className)} {...props}>
            {children}
        </div>
    );
};

export default Container;