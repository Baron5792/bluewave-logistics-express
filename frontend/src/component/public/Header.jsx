import { useEffect, useState } from "react";
import GoogleTranslateCustom from "../Translator";
import styles from '../../assets/css/Layout.module.css';
import LogoImg from '../../assets/image/logo/logo.png';
import { NavLink } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useUser } from "../context/User";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const PublicHeader = () => {
    /**
     * Set document title on component mount
     */
    const [modal, setModal] = useState(false);
    const handleTrackModal = () => {
        setModal(true);
    }

    const [userModal, setUserModal] = useState(false);
    const [register, setRegister] = useState(true);
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setRegister(false);
        setLogin(true);
    }

    const handleRegister = () => {
        setRegister(true);
        setLogin(false);
    }

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        })) 
    }

    const [registerBtn, setRegisterBtn] = useState(false);
    const handleRegistration = async(event) => {
        event.preventDefault();
        setRegisterBtn(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}account/Register.php`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })

            const request = await response.json();
            if (request.status === 'success') {
                toast.success('Registration successful', {toastId: 'success'});
                setRegister(false);
                setLogin(true);
                setRegisterBtn(false)
            }

            else {
                toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
                setTimeout(() => {
                    setRegisterBtn(false);
                }, 3000)
            }
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'network-error'})
            setTimeout(() => {
                setRegisterBtn(false);
            }, 3000)
        }
    }

    /**
     * Process login
     */
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const loginInput = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const [loginBtn, setLoginBtn] = useState(false);
    const handleLoginSubmission = async (event) => {
        event.preventDefault();
        setLoginBtn(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}account/Login.php`, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const request = await response.json();
            if (!response.ok) {
                toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
                setTimeout(() => {
                    setLoginBtn(false);
                }, 3000);
                return;
            }

            toast.success('Login successful', {toastId: 'success'});
            setLoginBtn(false);
            setUserModal(false);
            refreshUser();
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
            setTimeout(() => {
                setLoginBtn(false);
            }, 3000)
        }
    }

    /**
     * Logged in users 
     */
    const {user, refreshUser} = useUser();

    useEffect(() => {
        refreshUser();
    }, [])


    /**
     * Logout user
     */
    const logOut = async() => {
        const SwalAlert = await Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: 'lightcoral',
            cancelButtonText: 'Return',
            confirmButtonColor: 'lightgreen',
            confirmButtonText: 'Logout'
        })

        if (SwalAlert.isConfirmed) {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_API_URL}account/logout.php`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const request = await response.json();
                if (request.status === 'success') {
                    toast.success("You've successfully logged out", {toastId: 'success'});
                    refreshUser();
                }

                else {
                    toast.error(request.message || 'Something went wrong', {toastId: 'error'});
                }
            }

            catch (error) {
                toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
            }
        }
    }


    /**
     * check admin eligibility
     */
    const navigate = useNavigate();
   
    
    return (
        <>
            <header>
                <nav>
                    <div className={`${styles['nav_main_container']} w-100 bg-dark`}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className={`${styles['google_translator']} col-10 col-md-10 col-lg-6`}>
                                    <GoogleTranslateCustom />
                                </div>
                                <div className={`${styles['nav_links_container']} col-7 col-md-7 col-lg-6`}>
                                    <div className={styles['nav_links']}>
                                        <NavLink to={'/'} end className={(({isActive}) => isActive ? `${styles['active']}`: `${styles['notActive']}`)}>HOME</NavLink>
                                        <NavLink to={'about'} end className={(({isActive}) => isActive ? `${styles['active']}`: `${styles['notActive']}`)}>ABOUT US</NavLink>
                                        <NavLink to={'services'} end className={(({isActive}) => isActive ? `${styles['active']}`: `${styles['notActive']}`)}>SERVICES</NavLink>
                                        <NavLink to={'track&trace'} end className={(({isActive}) => isActive ? `${styles['active']}`: `${styles['notActive']}`)}>TRACK & TRACE</NavLink>
                                        <div>
                                            <span className="bi bi-search text-white" onClick={handleTrackModal}></span>
                                        </div>
                                    </div>
                                </div>

                                {/* menu button for mobile view */}
                                <div className={`${styles['menu_button_container']} col-2 col-md-2 col-lg-6`}>
                                    <Dropdown className={styles['dropdown_custom']}>
                                        <Dropdown.Toggle variant="" bsPrefix="dropdown-toggle-no-arrow"><i className="bi bi-list"></i></Dropdown.Toggle>
                                        <Dropdown.Menu className={styles['dropdown_menu_custom']}>
                                            <NavLink to={'/'} end>Home</NavLink>
                                            <NavLink to={'about'} end>About Us</NavLink>
                                            <NavLink to={'services'} end>Services</NavLink>
                                            <NavLink to={'track&trace'} end>Track & Trace</NavLink>

                                            <form action="" className="m-3">
                                                <div className="input-group">
                                                    <input type="text" name="" onClick={handleTrackModal} className="form-control" placeholder="Enter Tracking Number" id="" />
                                                </div>
                                            </form>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* contents with logo design */}
            <div className={styles['layout_container']}>
                <div className={styles['logo_container']}>
                    <img src={LogoImg} alt={`${import.meta.env.VITE_APP_NAME} logo`} />
                </div>
            </div>

            {user ? (
                <>
                    <div className={styles['users_intro']}>
                        HI, {user.username} <button type="button" onClick={logOut} className="btn btn-normal bi bi-door-open"></button>
                    </div>

                    {/* validate admin status */}
                    {user && user.admin === 1 ? (
                        <div className={styles['admin_intro']}>
                            <NavLink to={'/admin'}>Enter admin panel <span className="bi bi-shield-lock"></span></NavLink>
                        </div>
                    ): (
                        null
                    )}
                </>
            ): (
                <div className={styles['register_btn']}>
                    <p className="" onClick={() => setUserModal(true)}>Sign In / Sign Up</p>
                </div>    
            )}

            {/* modal for tracking goods */}
            <Modal show={modal} className="modal-md">
                <div className={styles['modal_body']}>
                    <div className={styles['modal_close']} onClick={() => setModal(false)}>
                        <button type="button" className="btn btn-normal bi bi-x fs-3"></button>
                    </div>
                    <div className={styles['modal_logo']}>
                        {/* wesites logo */}
                        <img src={LogoImg} alt={`${import.meta.env.VITE_APP_NAME} logo`} />
                    </div>
                    <div className="w-100 d-block">
                        <p className="text-center fs-4 fw-lighter">Track your shipment</p>
                    </div>

                    {/* tracking form */}
                    <form action="" method="post">
                        <div className={styles['tracking_form']}>
                            <div className="input-group">
                                <input placeholder="Tracking or Shipment Number" type="text" name="track_id" id="track_id" className="form-control" />
                                <button type="submit" className="btn btn-light">
                                    <span className="bi bi-search"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>


            {/* users modal */}
            <Modal show={userModal} className="modal-md">
                <div className={styles['modal_body']}>
                    <div className={styles['modal_close']} onClick={() => setUserModal(false)}>
                        <button type="button" className="btn btn-normal bi bi-x fs-3"></button>
                    </div>
                    <div className={styles['modal_logo']}>
                        {/* wesites logo */}
                        <img src={LogoImg} alt={`${import.meta.env.VITE_APP_NAME} logo`} />
                    </div>
                    

                    {/* tracking form */}
                    {register && (
                        <>
                            <div className="w-100 d-block">
                                <p className="text-center fs-4 fw-lighter">Create account</p>
                            </div>
                            <form onSubmit={handleRegistration} method="post">
                                <div className={`${styles['form-group']} form-group mt-2`}>
                                    <label htmlFor="username" className="small" style={{ fontFamily: 'sans-serif' }}>Username <span className="text-danger">*</span></label>
                                    <input placeholder="" onChange={handleInput} type="text" name="username" className="form-control" />
                                </div>

                                <div className={`${styles['form-group']} form-group mt-2`}>
                                    <label htmlFor="email" className="small" style={{ fontFamily: 'sans-serif' }}>Email <span className="text-danger">*</span></label>
                                    <input placeholder="" onChange={handleInput} type="text" name="email" className="form-control" />
                                </div>

                                <div className={`${styles['form-group']} form-group mt-2`}>
                                    <label htmlFor="password" className="small" style={{ fontFamily: 'sans-serif' }}>Password (5+ characters) <span className="text-danger">*</span></label>
                                    <input placeholder="" onChange={handleInput} type="password" name="password" className="form-control" />
                                </div>

                                <div className={`${styles['form-group']} form-group mt-2`}>
                                    <button disabled={registerBtn} type="submit">{registerBtn ? 'PROCESSING...': 'REGISTER'}</button>
                                </div>

                                <div className={styles['account_status']}>
                                    <p>Already have an account? <span onClick={handleLogin}>Login</span></p>
                                </div>
                            </form>
                        </>
                    )}

                    {login && (
                        <>
                            <div className="w-100 d-block">
                                <p className="text-center fs-4 fw-lighter">Login to account</p>
                            </div>
                            <form onSubmit={handleLoginSubmission} method="post">
                                <div className={`${styles['form-group']} form-group mt-2`}>
                                    <label htmlFor="email" className="small" style={{ fontFamily: 'sans-serif' }}>Email <span className="text-danger">*</span></label>
                                    <input placeholder="" type="text" name="email" onChange={loginInput} className="form-control" />
                                </div>

                                <div className={`${styles['form-group']} form-group mt-2`}>
                                    <label htmlFor="password" className="small" style={{ fontFamily: 'sans-serif' }}>Password <span className="text-danger">*</span></label>
                                    <input placeholder="" type="password" name="password" onChange={loginInput} className="form-control" />
                                </div>

                                <div className={`${styles['form-group']} form-group mt-2`}>
                                    <button type="submit">{loginBtn ? 'PROCESSING...': 'LOGIN'}</button>
                                </div>

                                <div className={styles['account_status']}>
                                    <p>Don't have an account? <span onClick={handleRegister}>Register</span></p>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </Modal>
        </>
    )
}

export default PublicHeader;