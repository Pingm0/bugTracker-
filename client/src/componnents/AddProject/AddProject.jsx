import {React,useState }from 'react'
import {Col,Row,Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddProject() {
    const mynav = useNavigate()

  const [project,setProject] = useState({
    projectName:'',

  })

  const hadnleChange = (e) => {
    setProject({
        ...project,[e.target.name]:e.target.value
    })
}

  async function submitHand(e){
    e.preventDefault()
      console.log(project)
    axios.post(`http://localhost:8000/api/project`,project)
        .then((data) => {
            console.log(data)
            mynav('/Main')
        })
        .catch((err) => {
            console.log(err)
            // setErrors(err.response.data.message)
            console.log(err.response.data.message)
        })


}
  return (
    <div>
<Form onSubmit={submitHand}>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Bug Description</label>
        <input class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) =>hadnleChange(e)} name='projectName'value={project.projectName} type='text'/>
    </div>
    
      <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>

    </div>
  )
}

export default AddProject