import React from 'react'
import { useState, useRef } from 'react';
import './Login.css'
import './Navbar.css'
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ForgetPass = (props) => {

    const { resetpassword } = useAuth()
    const history = useHistory();

    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            seterror('')
            setloading(true)
            await resetpassword(emailRef.current.value)
            await history.push('/')
        }
        catch (error) {
            seterror("Failed to create an accont")
        }

        setloading(false)
    }

    const emailRef = useRef()


    return (
        <div className='logTotal'>
            <div className='container mylogincont'>
                <h2 className="h2 text-start my-3">Reset Your Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input required minLength={8} type="email" ref={emailRef} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-3">
                        {error !== '' ? <p className='danger'>Invalid email or password</p> : ''}
                    </div>
                    <button type="submit" disabled={loading} className="btn btn-primary" >Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPass
