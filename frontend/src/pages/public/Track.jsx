import { useEffect } from "react"
import RequiredImg from '../../assets/image/constant/required.png';
import styles from '../../assets/css/Track.module.css';
import ScrollFadeIn from "../../component/public/ScrollFadeIn";
import Error from "../../component/Error";

export default function Track () {
    useEffect(() => {
        document.title = `Track & Trace - ${import.meta.env.VITE_APP_NAME}`;
    }, [])

    return (
        <>
            <div className={styles['required_container']}>
                <img src={RequiredImg} alt={import.meta.env.VITE_APP_NAME} />
            </div>

            {/* track input */}
            <div className="container">
                <div className={styles['track_title']}>
                    <p>Enter your tracking number here for a full update on your shipment's status, journey, and delivery date.</p>
                </div>

                <ScrollFadeIn>
                    <div className={styles['horizontal_line']}></div>
                </ScrollFadeIn>

                <div className={`${styles['track_input']} form-group`}>
                    <div className="input-group">
                        <button type="button" className="btn btn-normal bi bi-truck"></button>
                        <input type="text" placeholder="Enter your tracking code" name="track_id" className="form-control" id="" />
                    </div>
                </div>
            </div>

            <div className={styles['space']}></div>

            <Error />
        </>
    )
}