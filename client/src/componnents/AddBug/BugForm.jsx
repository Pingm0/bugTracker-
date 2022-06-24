import {React,useState }from 'react'
import {Col,Row,Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate,useParams } from "react-router-dom";



function BugForm() {
  const mynav = useNavigate()
  const {projectId} = useParams()

  const [bugData,setBugData] = useState({
    description:'',
    severity:'',
    release:'',
    reportedBy:'',
    reportedDate:'',
    bugType:'',
    bugStatus:'',
    stepsToReproduce:''
  })

  const hadnleChange = (e) => {
    setBugData({
        ...bugData,[e.target.name]:e.target.value
    })
}

  async function submitHand(e){
    e.preventDefault()
      console.log(bugData)
    axios.post(`http://localhost:8000/api/bug/${projectId}`,bugData)
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
  <Row>
    <Col>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Bug Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) =>hadnleChange(e)} name='description'value={bugData.description}></textarea>

        <label for="exampleFormControlTextarea1" class="form-label">Steps to reproduce </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) =>hadnleChange(e)} name='stepsToReproduce'value={bugData.stepsToReproduce}></textarea>
    </div>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="BugOpt">
    <select className="form-select" aria-label="Bug Type" onChange={(e) =>hadnleChange(e)} name='bugType'value={bugData.bugType}>
            <option >Bug Type</option>
            <option value="Enhancement">Bug</option>
            <option value="Bug">Enhancement</option>

        </select>
        <select className="form-select" aria-label="Bug Severity" onChange={(e) =>hadnleChange(e)} name='severity'value={bugData.severity}>
            <option >Bug Severity</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
             <option value="Low">Low</option>
             <option value="Blocker">Blocker</option>

        </select>
      <Form.Control placeholder="Release Version" onChange={(e) =>hadnleChange(e)}  name='release'value={bugData.release}/>
      <Form.Control placeholder="Reported By" onChange={(e) =>hadnleChange(e)} name='reportedBy'value={bugData.reportedBy} />
      <label for="start">Start date:</label>

        <input type="date"  name="reportedDate"
       value={bugData.reportedDate}
       onChange={(e) =>hadnleChange(e)} 
        />
      <select className="form-select" aria-label="Bug Status" onChange={(e) =>hadnleChange(e)} name='bugStatus'value={bugData.bugStatus}>
            <option >Bug Status</option>
            <option value="Fixed">Fixed</option>
            <option value="Reported">Reported</option>
             <option value="inprogress">inprogress</option>

        </select>
      </Form.Group>
      <Button variant="primary" type="submit">
    Submit
  </Button>
    </Col>
  </Row>

</Form>

    </div>
  )
}

export default BugForm