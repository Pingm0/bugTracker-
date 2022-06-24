import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import nav from 'react-bootstrap/Nav';


function Main() {
    // const [bugData,setBugData] = useState([]);
    const [isReady,setIsReady] = useState(false);
    const [bugs,setBugs] = useState([]);
    const [projectNames,setProjectNames] = useState([])
    const [projectId,setprojectId] = useState('')



    // const {bugs} = bugData[0].bugs
    // console.log(bugData[0].bugs)
    console.log(bugs)


    useEffect( () => {
        const getBugData = async () => {
        
          try{
            const projNamesCall = await axios.get(`http://localhost:8000/api/projects`)
            console.log(projNamesCall.data,'This is my project names')
            // console.log(projNames.data[0]._id)
            // console.log(projNames.data[0].projectName)

            setProjectNames(projNamesCall.data)

            const resp = await axios.get(`http://localhost:8000/api/project/${projectId}`)
            console.log(resp)
            // setBugData(resp.data)
            // setBugs(bugData[0].bugs)
            setBugs(resp.data[0].bugs)


          }
          
          catch(err){
            console.log(err)
          }
      }

      getBugData()

      console.log(projectNames)
      setIsReady(true)
      console.log(Array.isArray(projectNames))
      },[projectId])


  return (
    
    <div>
                    <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Select a project</label>
                <div className="col-sm-10">

                    <select onChange={(e) => setprojectId(e.target.value) }>
                    {projectId === '' ? <option selected defaultValue='please Select a Project' >please Select a Project</option> : null}

                        { 

                            projectNames.map((project,index) => (
                                
                                <>
                                <option value={project._id}  key={index} >{project.projectName}</option>
                                </>
                            ))
                            
                        }
                    {/* {erros.foodType ? <p id='red'>{erros.foodType.message}</p> : null} */}
                    {console.log(projectId)}
                    </select>
                </div>
            </div>
            {/* <div>
                {projectId ? <Link to={`/addBug/${projectId}`} >Add Bug</Link> : null}
                              {projectId ? <Link to={`/addProject`} >                              Add Project        </Link> : null}
            </div> */}
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarExample01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" aria-current="page" href="#">{projectId ? <Link to={`/addProject`} >Add Project</Link> : null}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">{ <Link to={`/addBug/${projectId}`} >Add Bug</Link>}</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Description</th>
            <th>Severity</th>
            <th>Release</th>
            <th>Reported By</th>
            <th>Reported Date</th>
            <th>bugType</th>
            <th>Bug Status</th>
            <th>Steps To Reproduce</th>

            </tr>
        </thead>
        <tbody>
        { 
           isReady ? bugs.map((bug,index) => {
                let steps = []
                steps = bug.stepsToReproduce.split('\n')
                return (
                    <tr key={index}>
        
                    <td>{index + 1}</td>
                    <td>{bug.description}</td>
                    <td>{bug.severity}</td>
                    <td>{bug.release}</td>
                    <td>{bug.reportedBy}</td>
                    <td>{bug.reportedDate}</td>
                    <td>{bug.bugType}</td>
                    <td>{bug.bugStatus}</td>
                    {/* <td>{bug.stepsToReproduce}</td> */}
                    <td>{
                        
                        steps.map((step,index) => {
                                return(
                                    <li>{step}</li>
                                )

                            })
                        }</td>
        
                    </tr>
                )

            }) : null

        } 
        </tbody>
    </Table>
    </div> 
  )
}

export default Main