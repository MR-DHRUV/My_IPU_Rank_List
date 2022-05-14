import React, { useState } from 'react'
import './Search.css'
import data from './data'
import ProfileCard from './Profile_Card'


const Search = () => {
    const [bool, setbool] = useState(false)

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
    const mydata = data;

    const displayList = () => {
        setbool(true);
    }
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
    let no = 1;

    return (
        <div className='mainDivSearch'>
            <div className="d-flex myFormS container">
                <select class="form-select my-3" aria-label="Select College" placeholder='Select College'>
                    <option value={0}>Select Course</option>
                    {courseArray.map((element) => {
                        return <option value={element}>{element}</option>
                    })}
                </select>
                <input className="form-control me-2 my-3" type="search" placeholder="Enter student Name To Search" aria-label="Search" />
                <button className="btn btn-outline-success my-3" type="submit" onClick={displayList}>Search</button>
            </div>
            <div className="searchResults container">
                <div className="row searchResults">
                    {bool === true ? mydata.map((element) => {
                        no++;
                        if (no > 11) {
                            no = 1
                        };
                        return <ProfileCard name={element.name} enroll={element.enroll} clg={clgList[no].name} stream={stream[no].name} />}) : ''}
                </div>
            </div>
        </div>
    )
}

export default Search