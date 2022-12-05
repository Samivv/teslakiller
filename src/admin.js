import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Form, Button } from 'react-bootstrap';
import axios from 'axios';

function AdminPanel() {
  const addCategory = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value
    }
    axios.post('http://localhost:3000/products/addcategory.php', data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

    return (
        <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Form onSubmit={addCategory}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Category Name" name="name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              </div>
              </div>
        </div>
        </>
    );
}


export default AdminPanel;