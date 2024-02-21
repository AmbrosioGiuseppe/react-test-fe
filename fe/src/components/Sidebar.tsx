// src/components/Sidebar.tsx

import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Funzione per determinare lo stile del link in base alla pagina corrente
    const getLinkStyle = (path: string) => {
        return {
            padding: '10px',
            display: 'block',
            textDecoration: 'none',
            color: location.pathname === path ? 'red' : 'black', // Colore rosso per il link della pagina corrente
            fontWeight: location.pathname === path ? 'bold' : 'normal', // Grassetto per il link della pagina corrente
        };
    };

    return (
        <div style={{ width: '250px', height: '100vh', position: 'fixed', backgroundColor: '#f0f0f0' }}>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/" style={getLinkStyle('/')}>Home</Link></li>
                    <li><Link to="/settings" style={getLinkStyle('/settings')}>Settings</Link></li>
                    <li><Link to="/profile" style={getLinkStyle('/profile')}>Profile</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
