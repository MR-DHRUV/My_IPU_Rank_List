import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './Footer.css'



const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <h4 className="head h4 my-3">IPURankList.com</h4>
            <div className="social my-3">
                <Link to='/'><img className='socialicons mx-3 my-f-img' src={require('./images/github.png')} alt="NA" srcset="" height={'30px'} width={'30px'} /></Link>
                <Link to='/'><img className='socialicons mx-3 my-f-img' src={require("./images/instagram.png")} alt="NA" srcset="" height={'30px'} width={'30px'} /></Link>
                <Link to='/'><img className='socialicons mx-3 my-f-img' src={require("./images/linkedin.png")} alt="NA" srcset="" height={'30px'} width={'30px'} /></Link>
            </div>
            <div className="footerc">
                <h5 className="h5 copyright myfootertext my-3">Copyright &copy; {year} All rights reserved | <Link className='Sitelink' to='/'>IPUranklist.com</Link></h5>
            </div>

        </footer>
    )
}

export default Footer