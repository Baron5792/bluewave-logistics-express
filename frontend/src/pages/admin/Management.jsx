import { useCallback, useEffect, useState } from "react"
import styles from '../../assets/css/Management.module.css';
import { toast } from "react-toastify";
import { Dropdown, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const Management = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [locationModal, setLocationModal] = useState(false);
    const [locationData, setLocationData] = useState(null);
    
    const fetchShipment = useCallback(async() => {
        try {   
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/fetch_shipments.php`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const request = await response.json();
            if (request.status === 'success') {
                setData(request.data);
            }

            else {
                setData(null);
                toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
            }
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
        }

        finally {
            setLoading(false);
        }
    }, [])

    

    /**
     * 
     * @param {string} trackingNumber 
     * @returns {PromiseConstructor}
     */

    const copyItemLink = (trackingNumber) => {
        if (!trackingNumber) {
            toast.error('ID not found');
            return;
        }
        const domain = `${import.meta.env.VITE_APP_TRACK}?reference=${trackingNumber}`;
        try {
            navigator.clipboard.writeText(domain);
            toast.info('Track and Trace link copied successfully', {toastId: 'success'});
        }   

        catch (error) {
            toast.error('Something went wrong', {toastId: 'something-error'});
        }
    }

    /**
     * @param {int} trackId
     */
    const [updateLocation, setUpdateLocation] = useState(null);
    const [initalLocation, setInitialLocation] = useState(null);
    const handleLocation = async(trackId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/fetch_shipment_location_info.php?trackid=${trackId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const request = await response.json();
            if (request.status === 'success') {
                setLocationModal(true);
                setLocationData(request.data);
                setInitialLocation(request.data);  
                setUpdateLocation({
                    current_location: request.data.current_location || '',
                    product_destination: request.data.product_destination || '',
                    origin_address: request.data.origin_address || ''
                }) 
            }

            else {
                setLocationModal(false);
                setLocationData(null);
            }
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'error'});
            setLocationData(null);
        }
    }

    const deleteTrack = (trackId) => {
        console.log(trackId);
        return;
    }

    const mailUser = (trackId) => {
        console.log(trackId);
    }

    /**
     * 
     * @param {int} trackId 
     */
    const [updatedValue, setUpdatedValue] = useState(null);
    const [updateTrackModal, setUpdateTrackModal] = useState(false);
    const [fetchTrackData, setFetchTrackData] = useState('');
    const updateTrack = async(trackId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/fetch_track_data.php?trackid=${trackId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const request = await response.json();
            if (request.status === 'success') {
                setUpdateTrackModal(true);
                setFetchTrackData(request.data);
                setUpdatedValue({
                    shipping_date: request.data.shipping_date || '',
                    delivery_date: request.data.delivery_date || '',
                    weight: request.data.weight || '',
                    content: request.data.content || '',
                    recipient_name: request.data.recipient_name || '',
                    recipient_email: request.data.recipient_email || '',
                    sender_name: request.data.sender_name || '',
                    sender_email: request.data.sender_email || ''
                })
            }

            else {
                toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
                setUpdateTrackModal(false);
            }
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'error'});
            setUpdateTrackModal(false);
        }
    }

    /**
     * handle the updated value
     */
    const updateInput = (e) => {
        const { name, value } = e.target;
        setUpdatedValue(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleShipmentForm = async (event, trackId) => {
        event.preventDefault();
        const swalAlert = await Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: 'lightcoral',
            cancelButtonText: 'Cancel',
            confirmButtonColor: 'lightgreen',
            confirmButtonText: 'Proceed'
        })

        if (swalAlert.isConfirmed) {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/update_shipment_data.php`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        trackId: trackId,
                        shipping_date: updatedValue?.shipping_date,
                        delivery_date: updatedValue?.delivery_date,
                        weight: updatedValue?.weight,
                        content: updatedValue?.content,
                        recipient_name: updatedValue?.recipient_name,
                        recipient_email: updatedValue?.recipient_email,
                        sender_name: updatedValue?.sender_name,
                        sender_email: updatedValue?.sender_email
                    })
                })

                const request = await response.json();
                if (request.status === 'success') {
                    toast.success('Shipment has been updated successfully', {toastId: 'success'});
                    fetchShipment();
                    setUpdateTrackModal(false);
                }

                else {
                    toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
                }
            }

            catch (error) {
                toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
            }
        }
    }

    /**
     * array of dropdown content
     */
    const dropdownList = [
        {id: 'update location', title: 'Update Location', icon: 'upload', function: handleLocation},
        {id: 'Delete Track', title: 'Delete Shipment', icon: 'trash', function: deleteTrack},
        {id: 'update track', title: 'Update Shipment', icon: 'arrow-clockwise', function: updateTrack},
        {id: 'mail user', title: 'Mail User', icon: 'envelope', function: mailUser}
    ]

    /**
     * update location value
     */
    const handleLocationValue = (e) => {
        const { name, value } = e.target;
        setUpdateLocation(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLocationUpdate = async(event, trackId) => {
        event.preventDefault();
        const swalAlert = await Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            cancelButtonColor: 'lightcoral',
            confirmButtonColor: 'lightgreen',
            confirmButtonText: 'Update'
        })

        if (swalAlert.isConfirmed) {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/update_shipment_location.php`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        current_location: updateLocation?.current_location,
                        trackId: trackId,
                        product_destination: updateLocation?.product_destination,
                        origin_address: updateLocation?.origin_address
                    })
                })

                const request = await response.json();
                if (request.status === 'success') {
                    toast.success('Location has been updated successfully', {toastId: 'success'});
                    fetchShipment();
                    setLocationModal(false);
                }

                else {
                    toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
                }
            }

            catch (error) {
                toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
            }

        }
    }

    useEffect(() => {
        document.title = `Management - ${import.meta.env.VITE_APP_NAME}`;
        fetchShipment();
    }, [fetchShipment])

    if  (loading) {
        return (
            <>
                <div className="text-center">
                    <div className="spinner-border spinner-border-sm">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={`${styles['table_wrapper']} container`}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th></th>
                            <th></th>
                            <th>Package Name</th>
                            <th>Shipping Date</th>
                            <th>Current Location</th>
                            <th>Delivery Date</th>
                            <th>Status</th>
                            <th>Weight [KG]</th>
                            <th>Content</th>
                            <th>Package Type</th>
                            <th>Origin Address</th>
                            <th>Product Destination</th>
                            <th>Recipient Name</th>
                            <th>Reciepient Email</th>
                            <th>Sender Name</th>
                            <th>Sender Email</th>
                            <th>Sender Country</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={item?.id}>
                                    <td>{index + 1}.</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="normal">
                                                <span className="bi bi-three-dots"></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className={styles['dropdown_menu']}>
                                                {dropdownList && (
                                                    dropdownList.map((list) => (
                                                        <div className={styles['dropdown-content']} key={list.id}>
                                                            <p onClick={() => list.function(item?.id)}>
                                                            <span className={`bi bi-${list.icon}`}></span>    
                                                            {list.title}</p>
                                                        </div>
                                                    ))
                                                )}
                                                    
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => copyItemLink(item?.tracking_number)} className="bi bi-copy btn btn-normal btn-sm btn-outline-primary"></button>
                                    </td>
                                    <td>{item?.default_package_name}</td>
                                    <td>{item?.shipping_date}</td>
                                    <td>{item?.current_location}</td>
                                    <td>{item?.delivery_date}</td>
                                    <td>{item?.status}</td>
                                    <td>{item?.weight}</td>
                                    <td>{item?.content}</td>
                                    <td>{item?.package_type}</td>
                                    <td>{item?.origin_address}</td>
                                    <td>{item?.product_destination}</td>
                                    <td>{item?.recipient_name}</td>
                                    <td>{item?.recipient_email}</td>
                                    <td>{item?.sender_name}</td>
                                    <td>{item?.sender_email}</td>
                                    <td>{item?.sender_country}</td>
                                    <td>{new Date(item?.date).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ): (
                            null
                        )}
                    </tbody>
                </table>
            </div>



            {/* modals for location edit */}
            <Modal show={locationModal}>
                <div className={styles['modal_body']}>
                    <div className={styles['modal_title']}>
                        <p>Update Location</p>
                        <button type="button" className="bi bi-x btn btn-normal" onClick={() => setLocationModal(false)}></button>
                    </div>
                    <div className={styles['modal_form']}>
                        {locationData && (
                            <form onSubmit={(event) => handleLocationUpdate(event, locationData?.id)}>
                                <div className="form-group mb-3">
                                    <label htmlFor="current location" className="small">Current Location <span className="text-danger">*</span></label>
                                    <input type="text" name="current_location" onChange={handleLocationValue} value={updateLocation?.current_location} className="form-control" id="" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="current location" className="small">Origin Address <span className="text-danger">*</span></label>
                                    <input type="text" name="origin_address" onChange={handleLocationValue} value={updateLocation?.origin_address} className="form-control" id="" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="current location" className="small">Product Destination <span className="text-danger">*</span></label>
                                    <input type="text" name="product_destination" onChange={handleLocationValue} value={updateLocation?.product_destination} className="form-control" id="" />
                                </div>

                                <div className="form-group mt-5">
                                    <button type="submit" className="btn btn-primary form-control small">Update Location <span className="bi bi-upload"></span></button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </Modal>


            {/* modal to update track */}
            <Modal show={updateTrackModal}>
                <div className={styles['modal_body']}>
                    <div className={styles['modal_title']}>
                        <p>Update Shipment</p>
                        <button type="button" className="bi bi-x btn btn-normal" onClick={() => setUpdateTrackModal(false)}></button>
                    </div>
                    <div className={styles['modal_form']}>
                        {fetchTrackData && (
                            <form onSubmit={() => handleShipmentForm(event, fetchTrackData?.id)}>
                                <div className="form-group mb-3">
                                    <label htmlFor="shipping date" className="small">Shipping Date <span className="text-danger">*</span></label>
                                    <input type="date" onChange={updateInput} value={updatedValue?.shipping_date} name="shipping_date" className="form-control" id="" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="delivery date" className="small">Delivery Date <span className="text-danger">*</span></label>
                                    <input type="date" onChange={updateInput} value={updatedValue?.delivery_date} name="delivery_date" className="form-control" id="" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="weight" className="small">Weight <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <input type="text" onChange={updateInput} value={updatedValue?.weight} name="weight" className="form-control" id="" />
                                        <button type="button" className="disabled btn btn-normal">KG</button>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="content" className="small">Content <span className="text-danger">*</span></label>
                                    <input type="text" onChange={updateInput} value={updatedValue?.content} name="content" className="form-control" id="" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="content" className="small">Recipient Name <span className="text-danger">*</span></label>
                                    <input type="text" onChange={updateInput} value={updatedValue?.recipient_name} name="recipient_name" className="form-control" id="" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="content" className="small">Recipient Email <span className="text-danger">*</span></label>
                                    <input type="text" onChange={updateInput} value={updatedValue?.recipient_email} name="recipient_email" className="form-control" id="" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="content" className="small">Sender Name <span className="text-danger">*</span></label>
                                    <input type="text" onChange={updateInput} value={updatedValue?.sender_name} name="sender_name" className="form-control" id="" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="content" className="small">Sender Email <span className="text-danger">*</span></label>
                                    <input type="text" onChange={updateInput} value={updatedValue?.sender_email} name="sender_email" className="form-control" id="" />
                                </div>

                                <div className="form-group mt-5">
                                    <button type="submit" className="btn btn-primary form-control btn-sm">Update <span className="bi bi-upload"></span></button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Management