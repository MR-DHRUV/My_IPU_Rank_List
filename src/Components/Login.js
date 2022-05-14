import React from 'react'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Login.css'
import './Navbar.css'
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Login = (props) => {

    const { login, currentUser } = useAuth()
    const history = useHistory();




    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            seterror('')
            setloading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            await history.push('/')
        }
        catch (error) {
            seterror("Failed to create an accont")
        }

        setloading(false)
    }
    const emailRef = useRef()
    const passwordRef = useRef()

    return (
        <>
            <div className='logTotal'>
                <div className='container mylogincont'>
                    {loading && JSON.stringify(currentUser.email)}
                    <h2 className="h2 text-start my-3 myHeadMain">Welcome Back, </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input required minLength={8} type="email" ref={emailRef} placeholder='Please Enter Your Email' name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input required minLength={8} name='password' placeholder='Please Enter Your Password' ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            {error !== '' ? <p className='danger'>Invalid email or password</p> : ''}
                        </div>
                        <div className="my-3 d-flex flex-row">
                            <button type="submit" disabled={loading} className="btn btn-primary" >Sign In</button>
                            <Link to='/forgetpassword' className='btn btn-primary mx-3'>Forget Password</Link>
                        </div>
                    </form>
                    <div className="forgetPass">
                        <h5 className="h5">Dont Have An Account, <Link className="my-3 myreLink" to="/signup">Sign Up</Link></h5>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login
