import styles from '../../assets/css/Comment.module.css';
import Comment1 from '../../assets/image/comment/comment1.png';
import Comment2 from '../../assets/image/comment/comment2.png';
import Comment3 from '../../assets/image/comment/comment3.png';
import ScrollFadeIn from '../public/ScrollFadeIn';
const CustomersComment = () => {
    return (
        <>
            <div className="row" style={{ padding: '20px 0px 50px 0px' }}>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-3">
                    <div>
                        <span className='bi bi-quote text-secondary' style={{ fontSize: '60px' }}></span>
                    </div>
                    <p className='fs-2'>What our Customers are saying</p>
                    <div className={`${styles['tiny-line']}`}></div>
                </div>

                {/* comment here */}
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-4">
                    <ScrollFadeIn>
                        <div className={`${styles.testimonialCard} card`}>
        
                            {/* Testimonial Text */}
                            <p className={`${styles.testimonialText} mb-3`}>
                               Connecting your business to the world. {import.meta.env.VITE_APP_NAME} provides reliable logistics services with real-time tracking and professional cargo handling. From freight forwarding to warehousing, we ensure your shipments arrive safely and on schedule—every time.
                            </p>

                            {/* Rating Stars */}
                            <div className={`${styles.testimonialRating} mb-3`}>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                            </div>

                            {/* Author Info (Image and Details) */}
                            <div className="d-flex align-items-center">
                                {/* Author Image */}
                                <img 
                                    src={Comment1}
                                    alt={'_blank'} 
                                    className={`${styles.authorImage} rounded-circle me-3`} 
                                />
                                
                                {/* Author Name and Time */}
                                <div>
                                    <h6 className="mb-0">{'Howard Chavez'}</h6>
                                    <small className="text-muted">{'Facebook'}</small>
                                </div>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>

                <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-4">
                    <ScrollFadeIn>
                        <div className={`${styles.testimonialCard} card`}>
        
                            {/* Testimonial Text */}
                            <p className={`${styles.testimonialText} mb-3`}>
                                {import.meta.env.VITE_APP_NAME} delivers top-notch logistics services worldwide. With expert teams and advanced tracking, we ensure your cargo arrives safely and on time, every time.
                            </p>

                            {/* Rating Stars */}
                            <div className={`${styles.testimonialRating} mb-3`}>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                            </div>

                            {/* Author Info (Image and Details) */}
                            <div className="d-flex align-items-center">
                                {/* Author Image */}
                                <img 
                                    src={Comment2}
                                    alt={'_blank'} 
                                    className={`${styles.authorImage} rounded-circle me-3`} 
                                />
                                
                                {/* Author Name and Time */}
                                <div>
                                    <h6 className="mb-0">{'Lucal Elliot'}</h6>
                                    <small className="text-muted">{'Instagram'}</small>
                                </div>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>

                <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-4">
                    <ScrollFadeIn>
                        <div className={`${styles.testimonialCard} card`}>
        
                            {/* Testimonial Text */}
                            <p className={`${styles.testimonialText} mb-3`}>
                                At {import.meta.env.VITE_APP_NAME}, we connect businesses worldwide through reliable logistics and cargo services. Our experienced team leverages advanced technology for real-time tracking and transparent communication throughout your shipment. Trust us to deliver your goods safely and on time, anywhere in the world.
                            </p>

                            {/* Rating Stars */}
                            <div className={`${styles.testimonialRating} mb-3`}>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-fill' style={{ color: 'gold' }}></span>
                                <span className='bi bi-star-half' style={{ color: 'gold' }}></span>
                            </div>

                            {/* Author Info (Image and Details) */}
                            <div className="d-flex align-items-center">
                                {/* Author Image */}
                                <img 
                                    src={Comment3}
                                    alt={'_blank'} 
                                    className={`${styles.authorImage} rounded-circle me-3`} 
                                />
                                
                                {/* Author Name and Time */}
                                <div>
                                    <h6 className="mb-0">{'Hailey Martins'}</h6>
                                    <small className="text-muted">{'Instagram'}</small>
                                </div>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>

            </div>
        </>
    )
}

export default CustomersComment;