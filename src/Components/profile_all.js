import React from 'react'
import './studentProfile.css'
import './Profile2.css'
import semData from './data2'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import cumulativeData from './data3';
import yearCumulativeData from './data4';




const OnClickProfile = () => {
  const data = [
    {
      name: 'Sem-1',
      Percentage: (Number(semData[0].Percentage)),
      Credit_Percentage: (Number(semData[0].Credit_Percentage)),

    },
    {
      name: 'Sem-2',
      Percentage: (Number(semData[1].Percentage)),
      Credit_Percentage: (Number(semData[1].Credit_Percentage)),

    },
    {
      name: 'Sem-3',
      Percentage: Number(semData[2].Percentage),
      Credit_Percentage: Number(semData[2].Credit_Percentage),

    },
    {
      name: 'Sem-4',
      Percentage: Number(semData[3].Percentage),
      Credit_Percentage: Number(semData[3].Credit_Percentage),
    },
    {
      name: 'Sem-5',
      Percentage: Number(semData[4].Percentage),
      Credit_Percentage: Number(semData[4].Credit_Percentage),

    },
    {
      name: 'Sem-6',
      Percentage: Number(semData[5].Percentage),
      Credit_Percentage: Number(semData[5].Credit_Percentage),

    },
    {
      name: 'Sem-7',
      Percentage: Number(semData[6].Percentage),
      Credit_Percentage: Number(semData[6].Credit_Percentage),

    },
    {
      name: 'Sem-8',
      Percentage: Number(semData[7].Percentage),
      Credit_Percentage: Number(semData[7].Credit_Percentage),
    }
  ];
  const data_cgpa = [
    {
      name: 'Sem-1',
      SGPA: (Number(semData[0].SGPA)),
    },
    {
      name: 'Sem-2',
      SGPA: (Number(semData[1].SGPA)),
    },
    {
      name: 'Sem-3',
      SGPA: Number(semData[2].SGPA),
    },
    {
      name: 'Sem-4',
      SGPA: Number(semData[3].SGPA),
    },
    {
      name: 'Sem-5',
      SGPA: Number(semData[4].SGPA),
    },
    {
      name: 'Sem-6',
      SGPA: Number(semData[5].SGPA),
    },
    {
      name: 'Sem-7',
      SGPA: Number(semData[6].SGPA),
    },
    {
      name: 'Sem-8',
      SGPA: Number(semData[7].SGPA),
    }
  ];


  const disabled = true;
  let sem = 0;
  let sem1 = 0;




  return (
    <div className='profileMain'>
      <section>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="headingDiv">
                <h2 className="mainProfileHeading text-center bold">Personal Profile</h2>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Mr.Gupta</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Enrollmnet No</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">45484565645</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Programe</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">B.Tech</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Stream</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">CSE</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Institute</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">USICT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="headingDiv">
                <h2 className="mainProfileHeading text-center bold">Academic Profile</h2>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Marks : </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">900/1000</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Percentage : </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">90%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Credit Percentage : </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">87.6%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">CGPA : </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">9.7</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Equivalent Percentage : </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">8.32%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Credits Obtained :  </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">300/300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container text-center"><h1 className="h1 text-center my-4 mainProfileHeading bold">Semester Profile</h1></div>
      <div>
        <div className="row">
          <div className="col-md-12">
            <div id="content" className="content content-full-width">
              <div className="profile-content">

                <div className="tab-content p-0">

                  <div className="tab-pane fade active show" id="profile-post">

                    <ul className="timeline">
                      {semData.map((element) => {

                        sem++;
                        let year;
                        if (sem <= 2) {
                          year = 1
                        }
                        else if (2 < sem && sem <= 4) {
                          year = 2
                        }
                        else if (4 < sem && sem <= 6) {
                          year = 3
                        }
                        else {
                          year = 4
                        }
                        return (<li>

                          <div className="timeline-time">
                            <span className="date">Year {year}</span>
                            <span className="time">{`Sem-${sem}`}</span>
                          </div>

                          <div className="timeline-icon">
                            <a href={disabled}>&nbsp;</a>
                          </div>

                          <div className="timeline-body">
                            <div className="timeline-header">
                              <span className="userimage"><img src={require('./images/PngItem_3589740.png')} alt="" /></span>
                              <span className="username">{`Sem-${sem}`}</span>
                              <span className="pull-right text-muted">&nbsp; Acadmics</span>
                            </div>
                            <div className="timeline-content">
                              <p className="lead">
                                <i className="fa fa-quote-left fa-fw pull-left"></i>
                                <div className="mySemMarks">
                                  <div className='mySemMarksItem'>Marks : {element.Marks}</div>
                                  <div className='mySemMarksItem'>Percentage : {element.Percentage} %</div>
                                  <div className='mySemMarksItem'>Credit Marks : {element.Credit_Marks}</div>
                                  <div className='mySemMarksItem'>Credit Percentage: {element.Credit_Percentage} %</div>
                                  <div className='mySemMarksItem'>SGPA': {element.SGPA}</div>
                                  <div className='mySemMarksItem'>Equivalent Percentage : {element.Equivalent_Percentage}</div>
                                  <div className='mySemMarksItem'>Credits Obtained : {element.Credits_Obtained}</div>
                                </div>
                                <i className="fa fa-quote-right fa-fw pull-right"></i>
                              </p>
                            </div>
                          </div>

                        </li>)
                      })




                      }
                    </ul>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container text-center"><h1 className="h1 text-center my-4">Visualization</h1></div>
      <div className='container my-4 py-4 myGraphCont'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Percentage" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Credit_Percentage" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>


      </div>

      <div className='container my-4 py-4 myGraphCont'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data_cgpa}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="SGPA" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="container text-center"><h1 className="h1 text-center my-4">Result Breakdown</h1></div>
      <div className="resultBreakdown container my-4">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item myListItem-1 myListHead">Sem</li>
          <li class="list-group-item myListItem-2 myListHead">Marks</li>
          <li class="list-group-item myListItem-3 myListHead">Percentage</li>
          <li class="list-group-item myListItem-4 myListHead">SGPA</li>
        </ul>
        {semData.map((element) => {
          sem1++;
          return <ul class="list-group list-group-horizontal">
            <li class="list-group-item myListItem-1">{sem1}</li>
            <li class="list-group-item myListItem-2">{element.Marks}</li>
            <li class="list-group-item myListItem-3">{element.Percentage}</li>
            <li class="list-group-item myListItem-4">{element.SGPA}</li>
          </ul>
        })}
      </div>

      <div className="container text-center"><h1 className="h1 text-center my-4">Yearwise Result Breakdown</h1></div>

      <div className="resultBreakdown container my-4">

        <ul class="list-group list-group-horizontal">
          <li class="list-group-item myListItem-1 myListHead">Sem</li>
          <li class="list-group-item myListItem-2 myListHead">Marks</li>
          <li class="list-group-item myListItem-3 myListHead">Percentage</li>
          <li class="list-group-item myListItem-4 myListHead">GPA</li>
        </ul>

        <ul class="list-group list-group-horizontal">
          <li class="list-group-item myListItem-1">Year 1</li>
          <li class="list-group-item myListItem-2">2670/3000</li>
          <li class="list-group-item myListItem-3">74%</li>
          <li class="list-group-item myListItem-4">7.1</li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item myListItem-1">Year 2</li>
          <li class="list-group-item myListItem-2">2470/3000</li>
          <li class="list-group-item myListItem-3">67%</li>
          <li class="list-group-item myListItem-4">6.51</li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item myListItem-1">Year 3</li>
          <li class="list-group-item myListItem-2">2970/3000</li>
          <li class="list-group-item myListItem-3">97%</li>
          <li class="list-group-item myListItem-4">9.1</li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item myListItem-1">Year 4</li>
          <li class="list-group-item myListItem-2">2850/3000</li>
          <li class="list-group-item myListItem-3">84%</li>
          <li class="list-group-item myListItem-4">7.9</li>
        </ul>

      </div>

      <div className="container text-center"><h1 className="h1 text-center my-4">Cumulative Result Breakdown</h1></div>


      <div className="resultBreakdown container my-4">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item myListItem-1 myListHead">Semester</li>
          <li class="list-group-item myListItem-2 myListHead">Marks</li>
          <li class="list-group-item myListItem-3 myListHead">Percentage</li>
          <li class="list-group-item myListItem-4 myListHead">GPA</li>
        </ul>
        {cumulativeData.map((element) => {
          return <ul class="list-group list-group-horizontal">
            <li class="list-group-item myListItem-1">{element.Sem}</li>
            <li class="list-group-item myListItem-2">{element.Marks}</li>
            <li class="list-group-item myListItem-3">{element.Percent}</li>
            <li class="list-group-item myListItem-4">{element.GPA}</li>
          </ul>
        })}
      </div>

      <div className="resultBreakdown container my-4">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item myListItem-1 myListHead">Year</li>
          <li class="list-group-item myListItem-2 myListHead">Marks</li>
          <li class="list-group-item myListItem-3 myListHead">Percentage</li>
          <li class="list-group-item myListItem-4 myListHead">GPA</li>
        </ul>
        {yearCumulativeData.map((element) => {
          return <ul class="list-group list-group-horizontal">
            <li class="list-group-item myListItem-1">{element.Year}</li>
            <li class="list-group-item myListItem-2">{element.Marks}</li>
            <li class="list-group-item myListItem-3">{element.Percent}</li>
            <li class="list-group-item myListItem-4">{element.GPA}</li>
          </ul>
        })}
      </div>



    </div>
  )
}

export default OnClickProfile
