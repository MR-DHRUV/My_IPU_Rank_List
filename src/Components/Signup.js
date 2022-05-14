import React, { useState } from 'react'
import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Login.css'
import { useAuth } from '../context/AuthContext';

const Signup = (props) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirnRef = useRef()
    const { signup, currentUser } = useAuth()
    const history = useHistory()

    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (passwordRef.current.value !== passwordConfirnRef.current.value) {
            return seterror("Please enter same passwords")
        }

        try {
            seterror('')
            setloading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            await history.push('/');

        }
        catch (error) {
            seterror("Failed to create an accont")
        }

        setloading(false)
    }

    return (<div className='logTotal'>
        <div className='container my-3'>
            {loading && JSON.stringify(currentUser.email)}
            <h2 className="h2 text-start my-3 myHeadMain">Hello, </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="email" placeholder='Please Enter Your Email' name='email' required minLength={8} ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder='Please Enter Password' name='password' required minLength={8} ref={passwordRef} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder='Please Enter Confirm Password' required minLength={8} ref={passwordConfirnRef} name='cpassword' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    {error !== '' ? <p className='danger'>Please enter valid details</p> : ''}
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary">Sign Up</button>
            </form>
        </div>
        <div className="forgetPass container">
            <h5 className="h5">Already signed up, <Link className="my-3 myreLink" to="/signin">Sign In</Link></h5>
        </div>
    </div>
    )
}

export default Signup
