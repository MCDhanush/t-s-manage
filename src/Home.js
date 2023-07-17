import { useEffect, useState } from "react";

export function Home() {

  const [lengtht, setLengtht] = useState([])
  const [lengths, setLengths] = useState([])

  useEffect(()=>{
  fetch("https://64a1011e0079ce56e2dabc8a.mockapi.io/teachers")
  .then((e)=>e.json())
  .then((e)=>setLengtht(e))
},[])

  useEffect(()=>{
  fetch("https://64a1011e0079ce56e2dabc8a.mockapi.io/students")
  .then((e)=>e.json())
  .then((e)=>setLengths(e))
},[])

//   lengths.map((e)=>{
//     console.log(e.value)
// }) 

  return (<>
  <div className="home">
  <h1 className="home-head"> Welcome to Admin Management</h1>
  <div className="home-bar">
  <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                               Toatal Number of Teachers</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{lengtht.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                               Total Number of Students</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{lengths.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>

                        <h2>Administrative Management is the process of managing information through people. This usually involves performing the storage and distribution of information to those within an organisation. A large number of roles within business require some element of administrative management.</h2>
  </div>

  </>
  );
}
