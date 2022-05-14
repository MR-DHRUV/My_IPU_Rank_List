import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
    return (
        <>
            <div className="navigation-wrap bg-light start-header start-style px-4 position-sticky">
                <nav className="navbar navbar-expand-md navbar-light">

                    <Link className="navbar-brand text-start nav-head" to="/"> <img src={require('./images/PngItem_3589740.png')} alt="" srcset="" /> </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto py-4 py-md-0">
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" aria-haspopup="true">Home</Link>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Link className="nav-link" to="/collegelist">University Ranklist</Link>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Link className="nav-link" to="/collegelist">College Ranklist</Link>
                            </li>

                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Link className="nav-link" to="/query/enroll">Student Profile</Link>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Link className="nav-link" to="/query/name">Search By Name</Link>
                            </li>
                        </ul>
                        <li className="image-profile-li pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link to='/profile' ><img className='userProfie' src="https://randomuser.me/api/portraits/women/63.jpg" alt="Na" srcset="" /></Link>
                        </li>
                    </div>


                </nav>
            </div>
        </>
    )
}

export default Navbar 