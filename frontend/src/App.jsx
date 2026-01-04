import { Routes, Route } from 'react-router-dom';
import PublicLayout from './component/layout/Public';
import Home from './pages/public/Home';
import AboutUs from './pages/public/AboutUs';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import styles from './assets/css/Preloader.module.css';
import Services from './pages/public/Services';
import Track from './pages/public/Track';
import AdminLayout from './component/admin/Header';
import Dashboard from './pages/admin/Dashboard';
import NewShipment from './pages/admin/NewShipment';

const App = () => {
    /**
     * set is loading for page lazy load
     */
    const [progress, setProgress] = useState(0);
    useEffect(() => {
         const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [])

    if (progress < 100) {
        return (
            <>
                <div className={styles.preloader}>
                    <div className={styles.logo}>
                        <span>BLUEWAVE</span> LOGISTICS
                    </div>
                    
                    <div className={styles.truckWrapper}>
                        <div className={styles.truckBody}>
                            <div className={styles.truckCabin}>
                                <div className={styles.truckWindow}></div>
                            </div>
                            <div className={`${styles.wheel} ${styles.wheel1}`}></div>
                            <div className={`${styles.wheel} ${styles.wheel2}`}></div>
                            <div className={`${styles.wheel} ${styles.wheel3}`}></div>
                        </div>
                        <div className={styles.road}></div>
                    </div>

                    <div className={styles.loadingText}>
                        Delivering Excellence<span>.</span><span>.</span><span>.</span>
                    </div>
                    
                    <div className={styles.progressBar}>
                        <div 
                            className={styles.progress} 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    
                    <div className={styles.stats}>
                        <span style={{ color: 'white', fontFamily: 'sans-serif' }}>Tracking: 0{progress}%</span>
                    </div>
                </div>   
            </>
        )
    }
    return (
        <>
                <Routes>
                    <Route path='/' element={<PublicLayout />}>
                        <Route index element={<Home />} />
                        <Route path='about' element={<AboutUs />} />
                        <Route path='services' element={<Services />} />
                        <Route path='track&trace' element={<Track />} />
                    </Route>

                    <Route path='/admin' element={<AdminLayout />}>
                        <Route element={<Dashboard />} end index />
                        <Route path='new_shipment' end element={<NewShipment />} />
                    </Route>
                </Routes>

            <ToastContainer 
                position='bottom-center'
                autoClose={3000}
                theme='colored'
                pauseOnHover
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                limit={3}
            />
        </>
    )

    
}


export default App;