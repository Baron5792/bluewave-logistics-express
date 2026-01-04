import { createContext, useContext, useState, useEffect } from "react";
const UserContext = createContext(null);

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async() => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_MIDDLEWARE}check_user_authentication.php`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const request = await response.json();
            if (request.status === 'success') {
                setUser(request.data);
            }

            else {
                setUser(null);
            }
        }

        catch (error) {
            setUser(null);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const value = ({
        user,
        refreshUser: fetchUser
    })

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}