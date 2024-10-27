import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () =>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("User")
            toast.success("Logout successful!")
            setTimeout(() => {
                
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Error:", error.message)
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md ml-4'
        onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout