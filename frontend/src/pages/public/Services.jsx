import { Modal } from 'react-bootstrap';
import styles from '../../assets/css/Services.module.css';
import RequiredImg from '../../assets/image/constant/required.png';
import Service1 from '../../assets/image/services/service1.png';
import { useEffect, useState } from 'react';
import ScrollFadeIn from '../../component/public/ScrollFadeIn';
import Service2 from '../../assets/image/services/service2.png';
import Service3 from '../../assets/image/services/service3.png';
import Service4 from '../../assets/image/services/service4.png';
import Service5 from '../../assets/image/services/service5.png';
import Service6 from '../../assets/image/services/service6.png';
import CustomersComment from '../../component/layout/Comment';



export default function Services () {
    useEffect(() => {
        document.title = `Services - ${import.meta.env.VITE_APP_NAME}`;
    }, [])  

    /**
     * for the first service
     */
    const [GroundModal, setGroundModal] = useState(false);
    const [readMoreGround, setReadMoreGround] = useState(false);
    const handleGroundModal = () => {
        setReadMoreGround(true);
        setTimeout(() => {
            setGroundModal(true);
            setReadMoreGround(false);
        }, 3000)
    }

    /**
     * for the second service
     */
    const [limitedModal, setLimitedModal] = useState(false);
    const [readMoreLimited, setReadMoreLimited] = useState(false);
    const handleLimited = () => {
        setReadMoreLimited(true);
        setTimeout(() => {
            setLimitedModal(true);
            setReadMoreLimited(false);
        }, 3000)
    }

    // for third service
    const [cargoModal, setCargoModal] = useState(false);
    const [cargoMore, setCargoMore] = useState(false);
    const handleCargo = () => {
        setCargoMore(true);
        setTimeout(() => {
            setCargoModal(true);
            setCargoMore(false);
        }, 3000)
    }

    /**
     * for the forth service
     */
    const [shipModal, setShipModal] = useState(false);
    const [shipMore, setShipMore] = useState(false);
    const handleShip = () => {
        setShipMore(true);
        setTimeout(() => {
            setShipModal(true);
            setShipMore(false);
        }, 3000)
    }

    /**
     * for the fifth service
     */
    const [airModal, setAirModal] = useState(false);
    const [airMore, setAirMore] = useState(false);
    const handleAir = () => {
        setAirMore(true);
        setTimeout(() => {
            setAirModal(true);
            setAirMore(false);
        }, 3000)
    }

    /**
     * for the sixth service
     */
    const [trustModal, setTrustModal] = useState(false);
    const [trustMore, setTrustMore] = useState(false);
    const handleTrust = () => {
        setTrustMore(true);
        setTimeout(() => {
            setTrustModal(true);
            setTrustMore(false);
        }, 3000)
    }
    return (
        <>
            <div className={styles['required_container']}>
                <img src={RequiredImg} alt={import.meta.env.VITE_APP_NAME} />
            </div>

            {/* service cards */}
            <div className="container">
                <div className="row">


                    {/* service 1 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={styles['service_card_container']}>
                            <div className={styles['service_image']}>
                                <img src={Service1} alt="Services Rendered" />
                            </div>
                            <div className={styles['service_card_content']}>
                                <div className={styles['service_title']}>
                                    <p>Ground Shipping</p>
                                </div>
                                <div className={styles['service_description']}>
                                    <p>{import.meta.env.VITE_APP_NAME} Transport offers an efficient integrated transport system with multiple types of trucks available to support your trucking and distribution needs.</p>
                                </div>
                                <div className={styles['service_learn_more']}>
                                    <p onClick={handleGroundModal}>{readMoreGround ? "PROCESSING...": 'READ MORE'} <span className={`${readMoreGround ? 'spinner-border spinner-border-sm text-secondary': 'bi bi-arrow-right'}`}></span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* service 2 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={styles['service_card_container']}>
                            <div className={styles['service_image']}>
                                <img src={Service2} alt="Services Rendered" />
                            </div>
                            <div className={styles['service_card_content']}>
                                <div className={styles['service_title']}>
                                    <p>{import.meta.env.VITE_APP_NAME} LTD</p>
                                </div>
                                <div className={styles['service_description']}>
                                    <p>Through our {import.meta.env.VITE_APP_NAME} services, we provide expedited Air Freight delivery, Air Cargo and Excess Baggage delivery.</p>
                                </div>
                                <div className={styles['service_learn_more']}>
                                    <p onClick={handleLimited}>{readMoreLimited ? 'PROCESSING...': 'READ MORE'} <span className={`${readMoreLimited ? 'spinner-border spinner-border-sm text-secondary': 'bi bi-arrow-right'}`}></span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* service 3 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={styles['service_card_container']}>
                            <div className={styles['service_image']}>
                                <img src={Service3} alt="Services Rendered" />
                            </div>
                            <div className={styles['service_card_content']}>
                                <div className={styles['service_title']}>
                                    <p>Cargo Handling</p>
                                </div>
                                <div className={styles['service_description']}>
                                    <p>Unique shipments demand specific solutions especially for large projects that require the coordinated movement of oversized, overweight and high-value cargo.</p>
                                </div>
                                <div className={styles['service_learn_more']}>
                                    <p onClick={handleCargo}>{cargoMore ? 'PROCESSING...': 'READ MORE'} <span className={cargoMore ? 'spinner-border spinner-border-sm text-secondary': 'bi bi-arrow-right'}></span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* service 4 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={styles['service_card_container']}>
                            <div className={styles['service_image']}>
                                <img src={Service4} alt="Services Rendered" />
                            </div>
                            <div className={styles['service_card_content']}>
                                <div className={styles['service_title']}>
                                    <p>Ginant ship delivery</p>
                                </div>
                                <div className={styles['service_description']}>
                                    <p>{import.meta.env.VITE_APP_NAME} flexible and scalable sea freight solutions cover your specific needs. Our affiliation with leading carriers is the key to our cost-effective services.</p>
                                </div>
                                <div className={styles['service_learn_more']}>
                                    <p onClick={handleShip}>{shipMore ? 'PROCESSING...': 'READ MORE'} <span className={shipMore ? 'spinner-border spinner-border-sm text-secondary': 'bi bi-arrow-right'}></span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* service 5 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={styles['service_card_container']}>
                            <div className={styles['service_image']}>
                                <img src={Service5} alt="Services Rendered" />
                            </div>
                            <div className={styles['service_card_content']}>
                                <div className={styles['service_title']}>
                                    <p>Air shipping</p>
                                </div>
                                <div className={styles['service_description']}>
                                    <p>{import.meta.env.VITE_APP_NAME} is an airfreight forwarding specialists offering a comprehensive range of international air cargo solutions with unbeatable levels of customer service.</p>
                                </div>
                                <div className={styles['service_learn_more']}>
                                    <p onClick={handleAir}>{airMore ? 'PROCESSING...': 'READ MORE'} <span className={airMore ? 'spinner-border spinner-border-sm text-secondary': 'bi bi-arrow-right'}></span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* service 6 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={styles['service_card_container']}>
                            <div className={styles['service_image']}>
                                <img src={Service6} alt="Services Rendered" />
                            </div>
                            <div className={styles['service_card_content']}>
                                <div className={styles['service_title']}>
                                    <p>TRUST TRUCKING SERVICES</p>
                                </div>
                                <div className={styles['service_description']}>
                                    <p>{import.meta.env.VITE_APP_NAME} can handle a variety of domestic & international trucking services to suit your needs.</p>
                                </div>
                                <div className={styles['service_learn_more']}>
                                    <p onClick={handleTrust}>{trustMore ? 'PROCESSING...': 'READ MORE'} <span className={trustMore ? 'spinner-border spinner-border-sm text-secondary': 'bi bi-arrow-right'}></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* comment here */}
            <div className="container">
                <CustomersComment />
            </div>



            {/* modal for each pop up */}
            {/* modal for the ground shipping services */}
            <Modal show={GroundModal} className='fade w-100 modal-lg'>
                <div className='p-2'>
                    <button type="button" className='bi bi-x fs-3 btn btn-normal' onClick={() => setGroundModal(false)}></button>
                </div>
                <div className={styles['modal_container']}>
                    <div className={styles['modal_image']}>
                        <img src={Service1} alt={import.meta.env.VITE_APP_NAME} />
                    </div>
                    <div className={styles['modal_title']}>
                        <p className='fs-3 fw-bold' style={{ fontFamily: 'sans-serif' }}>Ground shipping</p>
                    </div>
                    <ScrollFadeIn>
                        <div className={styles['horizontal_line']}></div>
                    </ScrollFadeIn>
                    <div className={styles['modal_content']}>
                        <p>{import.meta.env.VITE_APP_NAME} offers an efficient integrated transport system with multiple types of trucks available to support your trucking and distribution needs. Our trucking service extends to various locations such as offices, warehouses, exhibition venue to neighboring countries, Florida and in the United Kingdom. All cargos are handled carefully, tracked and distributed in precise accordance with our customer’s schedule, assuring on-time deliveries.</p>
                        <p>{import.meta.env.VITE_APP_NAME} offers an efficient integrated transport system with multiple types of trucks available to support your trucking and distribution needs. All cargos are handled carefully, tracked and distributed in precise accordance with our customer’s schedule, assuring on-time deliveries. Outsourced logistics services are a perfect solution for businessmen and companies who strive to focus on their core business and leave the peripheral solutions to the professionals.</p>
                        <p>As part of the variety of our services, we offer to our clients extensive, advanced and varied services whilst handling the various goods strictly and accurately.</p>
                    </div>
                </div>
            </Modal>

            {/* second service modal */}
            <Modal show={limitedModal} className='fade w-100 modal-lg'>
                <div className='p-2'>
                    <button type="button" className='bi bi-x fs-3 btn btn-normal' onClick={() => setLimitedModal(false)}></button>
                </div>
                <div className={styles['modal_container']}>
                    <div className={styles['modal_image']}>
                        <img src={Service2} alt={import.meta.env.VITE_APP_NAME} />
                    </div>
                    <div className={styles['modal_title']}>
                        <p className='fs-3 fw-bold' style={{ fontFamily: 'sans-serif' }}>TRUST LOGISTICS SERVICES</p>
                    </div>
                    <ScrollFadeIn>
                        <div className={styles['horizontal_line']}></div>
                    </ScrollFadeIn>
                    <div className={styles['modal_content']}>
                        <p>Through our {import.meta.env.VITE_APP_NAME} services, we provide expedited Air Freight delivery, Air Cargo and Excess Baggage delivery. {import.meta.env.VITE_APP_NAME} Company provides international logistics services and delivery of documents, parcels and freight to over 100 countries around the world.</p>
                        <p>We know how important it is for your parcels to reach its destination via a single service provider with the capacity to respond flexibly.</p>
                        <p>That is why we have developed a complete range of solutions tailored to your international logistics and shipping requirements. Whether it’s handling a single document or a 500-kilogram freight consignment, {import.meta.env.VITE_APP_NAME} has the international freight solution for your needs. We also provide flexible rates for freight forwarding to our trusted partners in areas beyond our reach. With the launch of our new office in Houston, you can now send items to and from the United States with ease. Simply let us on the details of your shipment and we'll handle it from there. For international ecommerce, you can use our Houston address on the checkout and we'll send the item to your destination address on your behalf.</p>
                    </div>
                </div>
            </Modal>


            {/* third modal */}
            <Modal show={cargoModal} className='fade w-100 modal-lg'>
                <div className='p-2'>
                    <button type="button" className='bi bi-x fs-3 btn btn-normal' onClick={() => setCargoModal(false)}></button>
                </div>
                <div className={styles['modal_container']}>
                    <div className={styles['modal_image']}>
                        <img src={Service3} alt={import.meta.env.VITE_APP_NAME} />
                    </div>
                    <div className={styles['modal_title']}>
                        <p className='fs-3 fw-bold' style={{ fontFamily: 'sans-serif' }}>CARGO HANDLING</p>
                    </div>
                    <ScrollFadeIn>
                        <div className={styles['horizontal_line']}></div>
                    </ScrollFadeIn>
                    <div className={styles['modal_content']}>
                        <p>Unique shipments demand specific solutions especially for large projects that require the coordinated movement of oversized, overweight and high-value cargo. Be it oil and gas, energy, mining, manufacturing or aerospace or any other industry, {import.meta.env.VITE_APP_NAME} Company provides professional over-dimensional transportation services. Armed with intuitive understanding and unique knowledge of the logistics landscape and its regulatory complexities, our Project Cargo team deftly manages shipments of any size to/from any continent.</p>
                    </div>
                </div>
            </Modal>


            {/* forth modal */}
            <Modal show={shipModal} className='fade w-100 modal-lg'>
                <div className='p-2'>
                    <button type="button" className='bi bi-x fs-3 btn btn-normal' onClick={() => setShipModal(false)}></button>
                </div>
                <div className={styles['modal_container']}>
                    <div className={styles['modal_image']}>
                        <img src={Service4} alt={import.meta.env.VITE_APP_NAME} />
                    </div>
                    <div className={styles['modal_title']}>
                        <p className='fs-3 fw-bold' style={{ fontFamily: 'sans-serif' }}>Ginant ship delivery</p>
                    </div>
                    <ScrollFadeIn>
                        <div className={styles['horizontal_line']}></div>
                    </ScrollFadeIn>
                    <div className={styles['modal_content']}>
                        <p>{import.meta.env.VITE_APP_NAME} Company flexible and scalable sea freight solutions cover your specific needs. Our affiliation with leading carriers is the key to our cost-effective services. Finding the right solution for your cargo is a priority for us as our well-trained employees and agents throughout the world work diligently to ensure the best rates for your shipment. Whatever the size or type of commodity, or destination we will deliver your shipment just in time.</p>
                        <p>Whether Full Container Load (FCL), Less than Container Load (LCL) or specialized services such as buyer consolidation we offer the most cost effective solution possible. Our intermodal services supported by our surface transportation expertise ensure hassle free door-to-door deliveries every time.</p>
                        <ul>
                            <li>FCL (full container)</li>
                            <li>LCL (part container)</li>
                            <li>Special Equipments</li>
                        </ul>
                    </div>
                </div>
            </Modal>


            {/* fifth modal */}
            <Modal show={airModal} className='fade w-100 modal-lg'>
                <div className='p-2'>
                    <button type="button" className='bi bi-x fs-3 btn btn-normal' onClick={() => setAirModal(false)}></button>
                </div>
                <div className={styles['modal_container']}>
                    <div className={styles['modal_image']}>
                        <img src={Service5} alt={import.meta.env.VITE_APP_NAME} />
                    </div>
                    <div className={styles['modal_title']}>
                        <p className='fs-3 fw-bold' style={{ fontFamily: 'sans-serif' }}>AIR FREIGHT</p>
                    </div>
                    <ScrollFadeIn>
                        <div className={styles['horizontal_line']}></div>
                    </ScrollFadeIn>
                    <div className={styles['modal_content']}>
                        <p>{import.meta.env.VITE_APP_NAME} Company is an airfreight forwarding specialists offering a comprehensive range of international air cargo solutions with unbeatable levels of customer service. Our industry-focused approach is the key to ensuring the safe, speedy and cost-effective transit of your cargo.</p>
                        <p>We handle air cargo spanning not only key international airfreight routes but also offer individual transportation solutions to the more remote parts of the world. All airfreight shipments are planned, controlled and monitored door-to-door within our network, giving you the real-time updates all through till final delivery. Our airfreight solutions are designed to meet your challenges in today dynamic environment.</p>
                        <ul>
                            <li>FCL (full container)</li>
                            <li>LCL (part container)</li>
                            <li>Special Equipments</li>
                        </ul>
                    </div>
                </div>
            </Modal>


            {/* sixth modal */}
            <Modal show={trustModal} className='fade w-100 modal-lg'>
                <div className='p-2'>
                    <button type="button" className='bi bi-x fs-3 btn btn-normal' onClick={() => setTrustModal(false)}></button>
                </div>
                <div className={styles['modal_container']}>
                    <div className={styles['modal_image']}>
                        <img src={Service6} alt={import.meta.env.VITE_APP_NAME} />
                    </div>
                    <div className={styles['modal_title']}>
                        <p className='fs-3 fw-bold' style={{ fontFamily: 'sans-serif' }}>TRUST TRUCKING SERVICES</p>
                    </div>
                    <ScrollFadeIn>
                        <div className={styles['horizontal_line']}></div>
                    </ScrollFadeIn>
                    <div className={styles['modal_content']}>
                        <p>{import.meta.env.VITE_APP_NAME} can handle a variety of domestic & international trucking services to suit your needs. Currently we offer our customers FTL, LTL & Flat bed trucking services within the North America, South America, Europe, Asia and Africa.</p>
                        <p>By outlining our expectations, we are ensured that we are providing a domestic service that is second to none. Additionally, we monitor and maintain current proof of valid cargo liability insurance for each qualifying carrier. This protects you. Next, we consider pricing.</p>
                        <p>Our core carriers must be proven performers in service and price. Because of the large volume of cargo that we move, we are able to negotiate excellent discounts, which we are in turn able to pass on to our customers. As a result, our customers enjoy the benefits of superior service as well as discounted pricing. As we continue to strive for excellence, we look forward to offering additional automated features that will allow our customers to see real-time status information on their cargo.</p>
                    </div>
                </div>
            </Modal>
        </>
    )
}