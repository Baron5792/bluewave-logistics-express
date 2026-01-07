import { useEffect, useState } from 'react';
import styles from '../../assets/css/NewShipment.module.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const NewShipment = () => {
    const [formDataState, setFormDataState] = useState({
        default_package_name: '',
        shipping_date: '',
        delivery_date: '',
        service_type: 'express Delivery',
        status: 'order received',
        weight: '',
        content: '',
        package_type: 'box',
        package_image: null,
        origin_address: '',
        product_destination: '',
        recipient_name: '',
        recipient_email: '',
        sender_name: '',
        sender_email: '',
        sender_country: '',
        current_location: ''
    })

    const handleInput = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormDataState(prev => ({
                ...prev,
                [name]: files[0]
            }))
        }

        else {
            setFormDataState(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const [submitBtn, setSubmitBtn] = useState(false);
    const navigate = useNavigate();
    const handleSubmission = async(event) => {
        event.preventDefault();
        setSubmitBtn(true);
        try {
            const formData = new FormData();

            /**
             * append files
             */
            formData.append('default_package_name', formDataState.default_package_name);
            formData.append('shipping_date', formDataState.shipping_date);
            formData.append('delivery_date', formDataState.delivery_date);
            formData.append('service_type', formDataState.service_type);
            formData.append('status', formDataState.status);
            formData.append('weight', formDataState.weight);
            formData.append('content', formDataState.content);
            formData.append('package_type', formDataState.package_type);
            formData.append('origin_address', formDataState.origin_address);
            formData.append('product_destination', formDataState.product_destination);
            formData.append('recipient_name', formDataState.recipient_name);
            formData.append('recipient_email', formDataState.recipient_email);
            formData.append('sender_name', formDataState.sender_name);
            formData.append('sender_email', formDataState.sender_email);
            formData.append('sender_country', formDataState.sender_country);
            formData.append('current_location', formDataState.current_location);

            if (formDataState.package_image) {
                formData.append('package_image', formDataState.package_image);
            }   

            else {
                setTimeout(() => {
                    toast.error('Package image is required', {toastId: 'image-missing'});
                    setSubmitBtn(false);
                }, 3000)
                return;
            }

            /**
             * send data
             */
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/create_new_shipment.php`, {
                method: 'POST',
                credentials: 'include',
                body: formData
            })

            const request = await response.json();
            if (!response.ok) {
                setTimeout(() => {
                    toast.error(request.message || `Server responded with a ${response.status} code` || 'An error occred while creating shipment', {toastId: 'something-error'});
                    setSubmitBtn(false);
                }, 3000)
                return;
            }

            if (request.status === 'success') {
                setTimeout(() => {
                    toast.success(request.message || 'Shipment has been created successfullt', {toastId: 'success'});
                    setSubmitBtn(false);
                }, 3000);
                navigate('/admin/management');
            }

            else {
                setTimeout(() => {
                    toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
                    setSubmitBtn(false);
                }, 3000)
            }
        }

        catch (error) {
            setTimeout(() => {
                toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
                setSubmitBtn(false);
            }, 3000)
        }
    }

    useEffect(() => {
        document.title = `New Shipment - ${import.meta.env.VITE_APP_NAME}`;
    }, [])
    return (
        <>
            <form onSubmit={handleSubmission}>
                <div className="container">
                    <div className="row">
                        <p className={styles['section_title']}>Basic Shipment Information</p>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Default Package Name <span>*</span></label>
                                <input value={formDataState.default_package_name} type="text" onChange={handleInput} name="default_package_name"  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Shipping Date <span>*</span></label>
                                <input value={formDataState.shipping_date} type="date" onChange={handleInput} name="shipping_date"  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Expected Delivery Date <span>*</span></label>
                                <input value={formDataState.delivery_date} type="date" name="delivery_date" onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Service Type <span>*</span></label>
                                <select value={formDataState.service_type} name="service_type" onChange={handleInput}  className='form-control' id="service_type">
                                    <option value="express Delivery">Express Delivery</option>
                                    <option value="standard Delivery">Standard Delivery</option>
                                    <option value="economy Delivery">Economy Delivery</option>
                                    <option value="overnight Delivery">Overnight Delivery</option>
                                    <option value="same_day Delivery">Same Day Delivery</option>
                                    <option value="international">International</option>
                                    <option value="freight">Freight</option>
                                    <option value="white glove">White Glove</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Status <span>*</span></label>
                                <select value={formDataState.status} name="status" onChange={handleInput} id="status" className='form-control'>
                                    <optgroup label="Order Processing">
                                        <option value="order received">Order Received</option>
                                        <option value="processing">Processing</option>
                                        <option value="packed">Packed</option>
                                    </optgroup>
                                    
                                    <optgroup label="Shipping & Transit">
                                        <option value="label created">Label Created</option>
                                        <option value="picked up">Picked Up</option>
                                        <option value="in transit">In Transit</option>
                                        <option value="arrived at facility">Arrived at Facility</option>
                                        <option value="departed facility">Departed Facility</option>
                                    </optgroup>
                                    
                                    <optgroup label="Delivery">
                                        <option value="out for delivery">Out for Delivery</option>
                                        <option value="delivery attempted">Delivery Attempted</option>
                                        <option value="available for pickup">Available for Pickup</option>
                                        <option value="delivered">Delivered</option>
                                    </optgroup>
                                    
                                    <optgroup label="Exceptions">
                                        <option value="delayed">Delayed</option>
                                        <option value="on hold">On Hold</option>
                                        <option value="exception">Exception</option>
                                        <option value="returned to sender">Returned to Sender</option>
                                        <option value="lost">Lost</option>
                                        <option value="damaged">Damaged</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>

                        {/* Package Details */}
                        <p className={styles['section_title']}>Package Details</p>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Weight <span>*</span></label>
                                <div className="input-group">
                                    <input value={formDataState.weight} type="number" onChange={handleInput} name="weight"  className='form-control' id="" />
                                    <button type="button" className='bg-secondary btn btn-light text-light'>KG</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Contents <span>*</span></label>
                                <input type="text" value={formDataState.content} name="content" onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Package Type <span>*</span></label>
                                <select name="package_type" value={formDataState.package_type} onChange={handleInput}  className='form-control' id="package_type">
                                    <option value="box">Box</option>
                                    <option value="envelope">Envelope</option>
                                    <option value="tube">Tube</option>
                                    <option value="pallet">Pallet</option>
                                    <option value="crate">Crate</option>
                                    <option value="bag">Bag</option>
                                    <option value="roll">Roll</option>
                                    <option value="custom">Custom Package</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Package Image <span>*</span></label>
                                <input type="file" name="package_image" onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Current Location <span>*</span></label>
                                <input type="text" value={formDataState.current_location} name="current_location" onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        
                        {/* senders information */}
                        <p className={styles['section_title']}>Sender Information</p>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Sender's Name <span>*</span></label>
                                <input type="text" name="sender_name" value={formDataState.sender_name} onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Sender's Email <span>*</span></label>
                                <input type="text" name="sender_email" value={formDataState.sender_email} onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Sender's Country <span>*</span></label>
                                <input type="text" name="sender_country" value={formDataState.sender_country} onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>


                        {/* Shipping Route & Progress */}
                        <p className={styles['section_title']}>Route Information</p>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Origin Address <span>*</span></label>
                                <input type="text" name="origin_address" value={formDataState.origin_address} onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Product Destination <span>*</span></label>
                                <input type="text" name="product_destination" value={formDataState.product_destination} onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Recipient's Name <span>*</span></label>
                                <input type="text" name="recipient_name" value={formDataState.recipient_name} onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`${styles['form-group']} form-group mb-4`}>
                                <label htmlFor="dafault name">Recipient's E-Mail <span>*</span></label>
                                <input type="email" name="recipient_email" value={formDataState.recipient_email} onChange={handleInput}  className='form-control' id="" />
                            </div>
                        </div>
                    </div>
                    {/* submit */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={`${styles['form-group']} form-group mb-4`}>
                            <button type="submit" disabled={submitBtn} className='btn btn-primary form-control'>{submitBtn ? 'CREATING...': 'Create'} <span className={`${submitBtn ? 'spinner-border spinner-border-sm text-white': 'bi bi-plus'}`}></span></button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default NewShipment;