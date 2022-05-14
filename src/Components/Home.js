import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Home.css'

const Home = () => {

    const courseArray = [
        'BCA'
        , 'B.Tech'
        , 'USICT B.Tech.'
        , 'LLB'
        , 'B.Voc.'
        , 'B.Com.(H)'
        , 'BBA'
        , 'B.Ed.'
        , 'B. A.'
        , 'BHMCT']



    return (
        <>
            <div className="heroanime">
                <h1 className='mainHead tracking-in-contract'>IPU RANK LIST</h1>
            </div>

            <div className="clgRankLst my-2 container myList">
                <h2 className="h2 subHead1">College Rank List</h2>
                <div className="list-group">
                    {courseArray.map((element) => {
                        return <Link to='/collegelist' type="button" className="list-group-item list-group-item-action myLi">{element}</Link>
                    })}
                </div>
            </div>

            <div className="StudentRankLst my-4 container myList">
                <h2 className="h2 subHead1">Student Profile</h2>

                <div className="list-group">

                    <Link to='/query/enroll' type="button" className="list-group-item list-group-item-action myLi">Student Profile</Link>
                    <Link to='/query/name' type="button" className="list-group-item list-group-item-action myLi">Search by Name</Link>
                    <button type="button" className="list-group-item list-group-item-action myLi">Combined Result of Migration / Upgradation Students</button>

                </div>

            </div>
            <div className="StudentRankLst my-4 container myList">
                <h2 className="h2 subHead1">Others</h2>

                <div className="list-group">

                    <Link to='collegelist' type="button" className="list-group-item list-group-item-action myLi">University Rank List</Link>
                    <button type="button" className="list-group-item list-group-item-action myLi">Statistics</button>
                    <button type="button" className="list-group-item list-group-item-action myLi">Notification Bot</button>

                </div>

            </div>

        </>
    )
}

export default Home