import { useCallback, useEffect, useState } from "react";
import { Dropdown, Spinner, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import styles from '../../assets/css/Dashboard.module.css';

const Dashboard =  () => {
    /**
     * fetch every registered user
     */
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchRegisteredUsers = useCallback(async() => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/fetch_every_registered_users.php`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const request = await response.json();
            if (request.status === 'success') {
                setUsers(request.data);
            }

            else {
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

    useEffect(() => {
        fetchRegisteredUsers();
        document.title = `Dashboard - ${import.meta.VITE_APP_NAME}`;
    }, [fetchRegisteredUsers])


    /**
     * edit user
     */
    const [editUserData, setEditUserData] = useState(null);
    const [editUserModal, setEditUserModal] = useState(false);
    const [editUser, setEditUser] = useState({
        id: '',
        username: '',
        admin: 0,
        email: ''
    });
    const handleEdit = async(userId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/fetch_user_to_edit.php`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId
                })
            })

            const request = await response.json();
            if (request.status === 'success') {
                setEditUserData(request.data);
                setEditUserModal(true);
                setEditUser({
                    username: request.data.username,
                    email: request.data.email,
                    id: request.data.id,
                    admin: request.data.admin
                })
            }

            else {
                toast.error(request.message || 'Something went wrong');
                setEditUserData(null);
                setEditUserModal(false);
            }
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
            setEditUserData(null);
            setEditUserModal(false);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const editUserForm = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}admin/edit_user.php`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editUser)
            })

            const request = await response.json();
            if (request.status === 'success') {
                toast.success('User has been edited successfully', {toastId: 'success'});
                setEditUserModal(false);
                fetchRegisteredUsers();
            }

            else {
                toast.error(request.message || 'Something went wrong', {toastId: 'something-error'});
            }
        }

        catch (error) {
            toast.error(error.message || 'Something went wrong', {toastId: 'network-error'});
        }
    }


    /**
     * delete user
     */
    const handleDelete = async(userId) => {
        toast.error('Something went wrong, please try again later', {toastId: 'error'});
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <span className="ms-3">Loading users...</span>
            </div>
        )
    }
    return (
        <>
            <div className={styles['table_wrapper']}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>E-mail</th>
                            <th>Reg Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length > 0 ? (
                            users.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}.</td>
                                    <td>{item?.username}</td>
                                    <td>{item?.email}</td>
                                    <td>{new Date(item?.date).toLocaleDateString()}</td>
                                    <td>
                                        {item.admin === 0 ? (
                                        'user'
                                        ): (
                                            'admin'
                                        )}
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="normal">
                                                <span className="bi bi-three-dots"></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <div className={styles['dropdown_content']}>
                                                    <p onClick={() => handleEdit(item.id)}>Edit</p>
                                                    <p onClick={() => handleDelete(item.id)}>Delete</p>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))
                        ): (
                            <tr>
                                <td colSpan={6}>No user found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>



            {/* modal for editing user */}
            <Modal show={editUserModal}>
                <div className={styles['modal_body']}>
                    <div className={styles['modal_title']}>
                        <p>Edit User</p>
                        <p onClick={() => setEditUserModal(false)}>
                            <span className="bi bi-x"></span>
                        </p>
                    </div>

                    <form action="" onSubmit={editUserForm}>
                        <div className="form-group">
                            <label htmlFor="username" className="small">Username <span className="text-danger">*</span></label>
                            <input type="text" onChange={handleInputChange} className="form-control" name="username" value={editUser.username || ''} id="" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="email" className="small">Email <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" onChange={handleInputChange} name="email" value={editUser.email || ''} id="" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="admin" className="small">Admin Status <span className="text-danger">*</span></label>
                            <select name="admin" id="" onChange={handleInputChange} className="form-control">
                                {editUser && editUser.admin === 0 ? (
                                    <>
                                        <option value="0" selected>user</option>
                                        <option value="1">admin</option>
                                    </>
                                ): (
                                    <>
                                        <option value="0">user</option>
                                        <option value="1" selected>admin</option>
                                    </>
                                )}
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <button type="submit" className="btn btn-primary form-control btn-sm">Proceed</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}
export default Dashboard;