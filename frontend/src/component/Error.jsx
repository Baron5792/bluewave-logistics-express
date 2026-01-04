import ErrorImg from '../assets/image/error/error.jpg';
import styles from '../assets/css/Error.module.css';

const Error = () => {
    return (
        <>
            <div className={styles['error']}>
                <img src={ErrorImg} alt="error" />
            </div>
        </>
    )
}

export default Error;