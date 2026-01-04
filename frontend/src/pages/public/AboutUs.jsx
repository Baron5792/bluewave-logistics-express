import styles from '../../assets/css/AboutUs.module.css';
import RequiredImg from '../../assets/image/constant/required.png';
import AboutImg from '../../assets/image/Home/about_us.png';
import ScrollFadeIn from '../../component/public/ScrollFadeIn';
import Team1 from '../../assets/image/team/team1.jpg';
import Team2 from '../../assets/image/team/team2.jpg';
import Team3 from '../../assets/image/team/team3.jpg';
import Team4 from '../../assets/image/team/team4.jpg';
import CustomersComment from '../../component/layout/Comment';
import { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        document.title = `About us - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            <div className={styles['required_container']}>
                <img src={RequiredImg} alt={import.meta.env.VITE_APP_NAME} />
            </div>

            {/* about us write ups */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        {/* about us defined image */}
                        <div className={styles['about_us_image_container']}>
                            <img src={AboutImg} alt="About Us" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className={styles['about_us_writeups_container']}>
                            <div className={styles['about_us_header']}>
                                <p>About <span>{import.meta.env.VITE_APP_NAME}</span></p>
                            </div>
                            <ScrollFadeIn>
                                <div className={styles['horizontal_line']}></div>
                            </ScrollFadeIn>
                            <div className={styles['about_us_paragraphs']}>
                                 <p>At {import.meta.env.VITE_APP_NAME}, we are dedicated to providing top-notch logistics and cargo services that connect businesses and individuals across the globe. Our mission is to deliver excellence in every shipment, ensuring that your goods reach their destination safely and on time.</p>
                                <p>With a team of experienced professionals and a robust network of partners, we offer a comprehensive range of services including freight forwarding, warehousing, distribution, and supply chain management. We leverage cutting-edge technology to provide real-time tracking and transparent communication throughout the shipping process.</p>
                                <p>Customer satisfaction is at the heart of everything we do. We strive to build long-lasting relationships with our clients by understanding their unique needs and delivering tailored solutions that exceed expectations. Whether you're shipping locally or internationally, you can trust {import.meta.env.VITE_APP_NAME} to handle your logistics with care and professionalism.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['team_container']}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={styles['team_member_card']}>
                                <div className={styles['team_member_image']}>
                                    <img src={Team1} alt={import.meta.env.VITE_APP_NAME} />
                                </div>
                                <div className={styles['team_description']}>
                                    <p>Brian Forbes</p>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={styles['team_member_card']}>
                                <div className={styles['team_member_image']}>
                                    <img src={Team2} alt={import.meta.env.VITE_APP_NAME} />
                                </div>
                                <div className={styles['team_description']}>
                                    <p>Brian Forbes</p>
                                    <p>Co-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={styles['team_member_card']}>
                                <div className={styles['team_member_image']}>
                                    <img src={Team3} alt={import.meta.env.VITE_APP_NAME} />
                                </div>
                                <div className={styles['team_description']}>
                                    <p>Brian Forbes</p>
                                    <p>Digital Marketer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={styles['team_member_card']}>
                                <div className={styles['team_member_image']}>
                                    <img src={Team4} alt={import.meta.env.VITE_APP_NAME} />
                                </div>
                                <div className={styles['team_description']}>
                                    <p>Brian Forbes</p>
                                    <p>Logistics Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* comments here */}
            <div className='container'>
                <CustomersComment />
            </div>
        </>
    )
}

export default AboutUs;