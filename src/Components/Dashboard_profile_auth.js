import React, { useState } from 'react'
import './Dashboard.css'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'



const DashboardProfileAuth = () => {

    const [error, seterror] = useState('');
    const { currentUser, logout } = useAuth()
    const history = useHistory();

    const handleLogOut = async () => {
        seterror('')

        try {
            await logout()
            history.push('/signin')

        } catch {
            seterror("Failed to logout")
        }
    }

    return (
        <div className='container myContainer'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    {currentUser? <p className="card-text"> {currentUser.email}</p> : ''}
                    <button className="btn btn-primary" onClick={handleLogOut}>Logout</button>
                    <Link to='/profile/update' className='btn btn-primary mx-3'>Update Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardProfileAuth