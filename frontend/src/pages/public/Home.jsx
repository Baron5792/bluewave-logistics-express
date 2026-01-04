import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import FeaturedImg from '../../assets/image/Home/featured.png';
import styles from '../../assets/css/Home.module.css';
import { useNavigate } from "react-router-dom";
import ScrollFadeIn from '../../component/public/ScrollFadeIn';
import { toast } from "react-toastify";
import WhoWeAre from '../../assets/image/Home/who_we_are.png';
import OurVision from '../../assets/image/Home/our_vision.png';
import Comment from "../../component/layout/Comment";

const Home = () => {
    /**
     * set the document title of the website
     */
    const navigate = useNavigate();
    useEffect(() => {
        document.title = `Home - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            {/* featured post */}
            <div className={styles['featured_container']}>
                <div className={styles['featured_image']}>
                    <img src={FeaturedImg} alt={`${import.meta.env.VITE_APP_NAME}`} />
                </div>
                
            </div>

            {/* featured write ups */}
            <div className={styles['featured_writeups_container']}>
                <form action="">
                    <div className="form-group row">
                        <div className="col-7 col-md-9 col-lg-9">
                            <input type="text" name="" placeholder="Tracking Number" className="form-control" id="" />
                        </div>
                        <div className="col-5 col-md-3 col-ld-3">
                            <button type="submit" className="btn btn-warning">Track <span className="bi bi-arrow-right"></span></button>
                        </div>
                    </div>
                </form>
                <ScrollFadeIn>
                    <div>
                        <p style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '14px' }}>Need help changing your delivery? <span onClick={() => {
                            navigate('contact')
                        }} style={{ textDecoration: 'underline', color: 'white' }}>Get Help</span></p>
                    </div>
                </ScrollFadeIn>
            </div>


            {/* services rendered */}
            <div className={styles['services_rendered_header']}>
                <p>What Sets Us Apart</p>
                <ScrollFadeIn>
                    <div className={styles['horizontal_line']}></div>
                </ScrollFadeIn>
            </div>

            {/* services rendered */}
            <div className="container">
                <div className="row">
                    <div className={`${styles['service_card_container']} col-12 col-md-12 col-4 col-xl-4`}>
                        <div className={styles['service_card']}>
                            <div className={styles['service_icon']}>
                                <span className="bi bi-water"></span>
                            </div>
                            <div className={styles['service_content']}>
                                <p>Fast sea delivery</p>
                                <p>{import.meta.env.VITE_APP_NAME} flexible and scalable sea freight solutions cover your specific needs. Our affiliation with leading carriers is the key to our cost-effective services.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['service_card_container']} col-12 col-md-12 col-4 col-xl-4`}>
                        <div className={styles['service_card']}>
                            <div className={styles['service_icon']}>
                                <span className="bi bi-truck"></span>
                            </div>
                            <div className={styles['service_content']}>
                                <p>Fast road delivery</p>
                                <p>{import.meta.env.VITE_APP_NAME} offers an efficient integrated transport system with multiple types of trucks available to support your trucking and distribution needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['service_card_container']} col-12 col-md-12 col-4 col-xl-4`}>
                        <div className={styles['service_card']}>
                            <div className={styles['service_icon']}>
                                <span className="bi bi-airplane"></span>
                            </div>
                            <div className={styles['service_content']}>
                                <p>Fast air shipping</p>
                                <p>{import.meta.env.VITE_APP_NAME} is an airfreight forwarding specialists offering a comprehensive range of international air cargo solutions with unbeatable levels of customer service.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['service_card_container']} col-12 col-md-12 col-4 col-xl-4`}>
                        <div className={styles['service_card']}>
                            <div className={styles['service_icon']}>
                                <span className="bi bi-chat-dots"></span>
                            </div>
                            <div className={styles['service_content']}>
                                <p>Online Support</p>
                                <p>{import.meta.env.VITE_APP_NAME} offers a 24/7 online support services to handle all your trucking services to suit your needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['service_card_container']} col-12 col-md-12 col-4 col-xl-4`}>
                        <div className={styles['service_card']}>
                            <div className={styles['service_icon']}>
                                <span className="bi bi-shield-check"></span>
                            </div>
                            <div className={styles['service_content']}>
                                <p>Security System</p>
                                <p>{import.meta.env.VITE_APP_NAME} Engages best security service model to ensure prompt, accurate delivery of your goods around the world</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* who we are */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className={styles['who_we_are_intro']}>
                            <p>Do you know?</p>
                            <p>WHO WE ARE?</p>
                            <ScrollFadeIn>
                                <div className={styles['horizontal_line']}></div>
                            </ScrollFadeIn>
                        </div>
                        <div className={styles['who_we_are_content']}>
                            <p>{import.meta.env.VITE_APP_NAME} Logistics is a global leader in the logistics and transportation industry, committed to delivering innovative and efficient supply chain solutions. With a vast network spanning multiple countries, we specialize in air, sea, and land freight services, ensuring seamless connectivity for businesses of all sizes. Our dedicated team of professionals leverages cutting-edge technology to provide real-time tracking, customized logistics strategies, and exceptional customer service. At {import.meta.env.VITE_APP_NAME} Logistics, we prioritize sustainability and reliability, striving to exceed our clients' expectations while minimizing our environmental impact. Trust us to be your partner in navigating the complexities of global trade and logistics.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className={styles['who_we_are_image']}>
                            <img src={WhoWeAre} alt={import.meta.env.VITE_APP_NAME} />
                        </div>
                    </div>
                </div>
            </div>


            {/* our vision */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className={styles['our_vision_image']}>
                            <img src={OurVision} alt={import.meta.env.VITE_APP_NAME} />
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className={styles['our_vision_intro']}>
                            <p>Our Vision</p>
                            <ScrollFadeIn>
                                <div className={styles['horizontal_line']}></div>
                            </ScrollFadeIn>
                        </div>
                        <div className={styles['our_vision_content']}>
                            <p>To be the world's most trusted and innovative logistics partner, revolutionizing supply chain solutions through cutting-edge technology, unparalleled customer service, and a steadfast commitment to sustainability. We envision a future where our global network seamlessly connects businesses and communities, driving economic growth and fostering positive change worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <Comment />
                </div>
            </div>
        </>
    )
}

export default Home;