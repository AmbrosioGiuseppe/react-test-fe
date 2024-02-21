// src/components/LayoutWithSidebar.tsx

import React, { ReactNode } from 'react';
import Sidebar from '../../Sidebar';

interface LayoutWithSidebarProps {
    children: ReactNode;
}

const LayoutWithSidebar: React.FC<LayoutWithSidebarProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '250px', flexShrink: 0 }}>
                <Sidebar />
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                {children}
            </div>
        </div>
    );
};


export default LayoutWithSidebar;
