import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { Form, FormFile } from "react-bootstrap";

const NewFund = () => {
    

    return (
        <div>
            <div className='container mt-5'>
                <div className='fund-header card-fund'>
                    <h3>Make Raise Fund</h3>
                </div>
                <div className='form-container mt-5'>
                <Form.Group className='FormGroup'>
                    <Form.Control type="text" placeholder="Title" />
                    <br />
                    <button className='btn-fund'><a>Attach Thumbnail</a></button>
                    <br />
                    <br />
                    <Form.Control type="number" placeholder="Goals Donation" />
                    <br />
                    <Form.Control as="textarea" placeholder="Description" rows={10} />
                    <br />
                    <div className='btn-container'>
                        <button className='btn-fund'><a>Public Fundraising</a></button>
                    </div>
                    
                </Form.Group>
                </div>
            </div>
        </div>
    )
}



export default NewFund
