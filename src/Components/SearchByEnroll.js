import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Search.css'
const SearchByEnroll = () => {

  return (
    <div className='enrollMaindiv'>
      <div className="container">
        <input className="form-control me-2 my-3" type="search" placeholder="Enter Enrollment No To Search" aria-label="Search"/>
          <Link to='/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v' className="btn btn-outline-success my-3" type="submit">Search</Link>
      </div>
    </div>
  )
}

export default SearchByEnroll