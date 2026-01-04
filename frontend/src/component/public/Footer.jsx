import styles from '../../assets/css/Footer.module.css';
import LogoImg from '../../assets/image/logo/logo.png';

const PublicFooter = () => {
    return (
        <>
            <footer className={styles['footer_container']}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            {/* footer logo */}
                            <div className={styles['footer_logo']}>
                                <img src={LogoImg} alt={import.meta.env.VITE_APP_NAME} />
                            </div>
                            <div className={`${styles['footer_text']} my-3`}>
                                <p>© {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            {/* contact us title */}
                            <div className={styles['footer_contact_us']}>
                                <p>CONTACT US</p>
                            </div>
                            <div className={styles['footer_contact_details']}>
                                <span className='bi bi-globe'></span>
                                <p>Worldwide</p>
                            </div>
                            <div className={styles['footer_contact_details']}>
                                <span className='bi bi-envelope'></span>
                                <p>{import.meta.env.VITE_APP_EMAIL}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4"></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default PublicFooter;