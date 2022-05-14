import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Search.css'


const Profile_Card = (props) => {
    const history = useHistory()
    const profileSend = ()=>{
        history.push('/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v')
    }
    return (
        <div className="card col-md-3 mx-4 my-3 myProfileCard cardHoverProfile" onClick={profileSend}>
            <div className="card-body">
                <h5 className="card-title candName">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.enroll}</h6>
                <p className="card-text my-text text-start">College : {props.clg}</p>
                <p className="card-text my-text text-start">Stream : {props.stream}</p>
            </div>
        </div>
    )
}

export default Profile_Card