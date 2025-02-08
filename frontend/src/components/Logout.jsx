import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {

    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {

        try {

            // setAuthUser({
            //     ...authUser,
            //     user: null
            // })
            setAuthUser(null);
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")
            // setTimeout(() => {
            //     window.location.reload();
            // }, 2000);
        } catch (error) {
            toast.error("Error: " + error.message)
        }

    }

    return (
        <>
            <div>
                <button className='bg-red-500 text-white rounded-md px-2 py-2 hover:bg-red-600 duration-300 cursor-pointer' onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Logout