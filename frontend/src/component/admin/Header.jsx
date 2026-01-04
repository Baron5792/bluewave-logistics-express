import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
    FiHome,
    FiSettings,
    FiBell,
    FiMenu,
    FiChevronLeft,
    FiLogOut,
    FiUser,
    FiGrid,
    FiPackage
} from 'react-icons/fi';
import { useUser } from '../context/User';
import styles from '../../assets/css/AdminHeader.module.css';
import LogoImg from '../../assets/image/logo/logo.PNG';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const AdminLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <FiHome />, path: '/admin' },
        { id: 'shipment', label: 'New Shipment', icon: <FiPackage />, path: '/admin/new_shipment' },
    ];

    const { user, refreshUser } = useUser();

    // check if admin
    const navigate = useNavigate();
    const verifyAdministration = async() => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/eligibility.php`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const request = await response.json();
            if (!response.ok) {
                toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
                navigate('/');
                return;
            }
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
        }
    }

    useEffect(() => {
        verifyAdministration();
        refreshUser();
    }, [])

    return (
        <div className={styles.adminContainer}>
            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${sidebarCollapsed ? styles.collapsed : ''}`}>
                <div className={styles.sidebarHeader}>
                    {!sidebarCollapsed && (
                        <div className={styles.logo}>
                            <img src={LogoImg} alt="logo" className='w-100' />
                        </div>
                    )}
                    <button
                        className={styles.collapseBtn}
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    >
                        {sidebarCollapsed ? <FiMenu /> : <FiChevronLeft />}
                    </button>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `${styles.navLink} ${isActive ? styles.active : ''}`
                                }
                                end
                                onClick={() => setActiveMenu(item.id)}
                                >
                                <span className={styles.navIcon}>{item.icon}</span>
                                {!sidebarCollapsed && (
                                    <span className={styles.navLabel}>{item.label}</span>
                                )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <NavLink to={'/'}>
                    <div className={styles.sidebarFooter}>
                        <button className={styles.logoutBtn}>
                            <FiLogOut />
                            {!sidebarCollapsed && <span>Logout</span>}
                        </button>
                    </div>
                </NavLink>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <p className={styles.pageTitle}>
                            {menuItems.find(item => item.id === activeMenu)?.label || 'Dashboard'}
                        </p>
                    </div>
                
                    <div className={styles.headerRight}>
                        {/* <button className={styles.notificationBtn}>
                        <FiBell />
                            <span className={styles.notificationBadge}>3</span>
                        </button> */}
                        
                        <div className={styles.userProfile}>
                            <div className={styles.avatar} onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                                <FiGrid />
                            </div>
                            <div className={styles.userInfo}>
                                <span className={styles.userName}>{ user ? user.username : null }</span>
                                <span className={styles.userRole}>Administrator</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className={styles.contentArea}>
                    <Outlet />
                </div>

                {/* Footer */}
                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} AdminPanel. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
};

export default AdminLayout;