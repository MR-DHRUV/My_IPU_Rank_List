import React, { useState } from 'react'
import './ListModal.css'
import data from './data'
import './listHead.css'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom'


const ListModal = () => {
    const [bool, setbool] = useState(false)
    const clgList = [
        {
            "name": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH",
            "abbrev": "AIACTR",
            "code": "101",
            "codeEve": ""
        },
        {
            "name": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY",
            "abbrev": "AMITY",
            "code": "104",
            "codeEve": ""
        },
        {
            "name": "BHAGWAN MAHAVEER COLLEGE OF ENGINEERING & MANAGEMENT",
            "abbrev": "BMCEM",
            "code": "552",
            "codeEve": ""
        },
        {
            "name": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY",
            "abbrev": "BPIT",
            "code": "208",
            "codeEve": ""
        },
        {
            "name": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING",
            "abbrev": "BVCOE",
            "code": "115",
            "codeEve": "512"
        },
        {
            "name": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY",
            "abbrev": "BMIET",
            "code": "553",
            "codeEve": ""
        },
        {
            "name": "CH. BRAHAM PRAKASH GOVERNMENT ENGINEERING COLLEGE",
            "abbrev": "CBPGEC",
            "code": "207",
            "codeEve": ""
        },
        {
            "name": "DELHI INSTITUTE OF TOOL ENGINEERING",
            "abbrev": "DITE",
            "code": "702",
            "codeEve": ""
        },
        {
            "name": "DELHI TECHNICAL CAMPUS",
            "abbrev": "DTC",
            "code": "180",
            "codeEve": "256"
        },
        {
            "name": "G B PANT GOVT. ENGINEERING COLLEGE",
            "abbrev": "GBPGEC",
            "code": "209",
            "codeEve": ""
        },
        {
            "name": "GURU TEGH BAHADUR INSTITUTE OF TECHNOLOGY",
            "abbrev": "GTBIT",
            "code": "132",
            "codeEve": "768"
        },
        {
            "name": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT",
            "abbrev": "HMR",
            "code": "133",
            "codeEve": "965"
        },
        {
            "name": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS",
            "abbrev": "JIMS",
            "code": "255",
            "codeEve": ""
        },
        {
            "name": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY",
            "abbrev": "MAIT",
            "code": "148",
            "codeEve": "964"
        },
        {
            "name": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY",
            "abbrev": "MSIT",
            "code": "150",
            "codeEve": "963"
        },
        {
            "name": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY",
            "abbrev": "MSWAMI",
            "code": "551",
            "codeEve": ""
        },
        {
            "name": "NATIONAL POWER TRAINING INSTITUTE",
            "abbrev": "NPTI",
            "code": "153",
            "codeEve": ""
        },
        {
            "name": "NORTHERN INDIA ENGINEERING COLLEGE",
            "abbrev": "NIEC",
            "code": "156",
            "codeEve": "962"
        }
    ]

    const stream = [
        {
            "branch": "CSE",
            "name": "Computer Science and Engineering",
            "code": "027",
            "codeLE": "072"
        },
        {
            "branch": "CIV",
            "name": "Civil Engineering",
            "code": "034",
            "codeLE": "079"
        },
        {
            "branch": "ECE",
            "name": "Electronics and Communications Engineering",
            "code": "028",
            "codeLE": "073"
        },
        {
            "branch": "EE",
            "name": "Electrical Engineering",
            "code": "110",
            "codeLE": "083"
        },
        {
            "branch": "EEE",
            "name": "Electrical and Electronics Engineering",
            "code": "049",
            "codeLE": "078"
        },
        {
            "branch": "ICE",
            "name": "Instrumentation and Control Engineering",
            "code": "030",
            "codeLE": "076"
        },
        {
            "branch": "IT",
            "name": "Information Technology",
            "code": "031",
            "codeLE": "077"
        },
        {
            "branch": "MAE",
            "name": "Mechanical and Automation Engineering",
            "code": "036",
            "codeLE": "074"
        },
        {
            "branch": "ME",
            "name": "Mechanical Engineering",
            "code": "111",
            "codeLE": "082"
        },
        {
            "branch": "MET",
            "name": "Mechatronics",
            "code": "112",
            "codeLE": "084"
        },
        {
            "branch": "PE",
            "name": "Power Engineering",
            "code": "037",
            "codeLE": "075"
        },
        {
            "branch": "TE",
            "name": "Tools Engineering",
            "code": "086",
            "codeLE": "081"
        }
    ]
    const sem = ['Overall', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8']

    const year = ['2015-2019', '2016-2020', '2017-2021', '2018-2022', '2019-2023', '2020-2024']

    const shift = ['Motning', 'Evening', 'Both']

    const mydata = data;

    const displayList = () => {
        setbool(true);
    }

    // const history = useHistory()

    // const getProfile = ()=>{
    //     history.push('/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v')
    // }

    return (
        <div className='totalContainer'>
            <h1 className="h1 text-center listHead">RankList</h1>

            <div className="input container">
                <select class="form-select my-3" aria-label="Select College" placeholder='Select College'>
                    <option value={0}>Select College</option>
                    {clgList.map((element) => {
                        return <option value={element.abbrev}>{element.abbrev}</option>
                    })}
                </select>
                <select class="form-select my-3" aria-label="Select College" placeholder='Select College'>
                    <option value={0}>Select Shift</option>
                    {shift.map((element) => {
                        return <option value={element}>{element}</option>
                    })}
                </select>
                <select class="form-select my-3" aria-label="Select College" placeholder='Select College'>
                    <option value={0}>Select Year</option>
                    {year.map((element) => {
                        return <option value={element}>{element}</option>
                    })}
                </select>
                <select class="form-select my-3" aria-label="Select College" placeholder='Select College'>
                    <option value={0}>Select Branch</option>
                    {stream.map((element) => {
                        return <option value={element.branch}>{element.branch}</option>
                    })}
                </select>
                <select class="form-select my-3" aria-label="Select College" placeholder='Select College'>
                    <option value={0}>Select Sem</option>
                    {sem.map((element) => {
                        return <option value={element}>{element}</option>
                    })}
                </select>
                <button type="submit" className="btn btn-primary" onClick={displayList}>Submit</button>
            </div>
            <div className="ranklist container">
                <ul class="list-group">
                    {bool === true ?
                        <ul class="list-group list-group-horizontal listheadings">
                            <li class="tableHead h7 list-group-item list-main-head zero-item">Rank</li>
                            <li class="tableHead h7 list-group-item list-main-head first-item">Name</li>
                            <li class="tableHead h7 list-group-item list-main-head second-item">Enrollment No</li>
                            <li class="tableHead h7 list-group-item list-main-head third-item">Marks Obtained</li>
                            <li class="tableHead h7 list-group-item list-main-head fourth-item">Percentage</li>
                        </ul>
                        : ''}
                    {bool === true ? mydata.map((element) => {
                        return <ul class="list-group list-group-horizontal myWholeItem myelement">
                            <li class="list-group-item my-Item zero-item"><Link className='myLiLink' to='/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v'>{element.rank}</Link></li>
                            <li class="list-group-item my-Item first-item myPointer"><Link className='myLiLink' to='/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v'>{element.name}</Link></li>
                            <li class="list-group-item my-Item second-item"><Link className='myLiLink' to='/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v'>{element.enroll}</Link></li>
                            <li class="list-group-item my-Item third-item"><Link className='myLiLink' to='/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v'>{element.Marks}</Link></li>
                            <li class="list-group-item my-Item fourth-item"><Link className='myLiLink' to='/query/enroll/Kw7fcsf9fwfhfef0fdf998vd9v9v'>{element.percentage}</Link></li>
                        </ul>
                    }) : ''}
                </ul>
            </div>
        </div>
    )
}

export default ListModal