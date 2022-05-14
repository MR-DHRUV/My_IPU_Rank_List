import React from 'react'
import { useState, useRef } from 'react';
import './Login.css'
import './Navbar.css'
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const UpdateProfile = (props) => {

    const { currentUser, updateemail, updatepassword, } = useAuth()
    const history = useHistory();

    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        seterror('');
        setloading(true);

        const promises = []

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateemail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                return seterror("Passwords Dont Match")
            }
            promises.push(updatepassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            seterror('Failed To Update Profile')
        }).finally(setloading(false))
    }

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <div className='logTotal'>
            <div className='container mylogincont'>
                <h2 className="h2 text-start my-3">Update Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input minLength={8} type="email" defaultValue={currentUser.email} ref={emailRef} placeholder='Enter New Email' name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input minLength={8} placeholder='Enter New Password' name='password' ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input minLength={8} placeholder='Enter New Confirm Password' name='password' ref={passwordConfirmRef} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        {error !== '' ? <p className='danger'>Invalid email or password</p> : ''}
                    </div>
                    <button type="submit" disabled={loading} className="btn btn-primary" >Update</button>
                    {/* <button className='btn btn-primary mx-3' >Login with google</button> */}
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile
