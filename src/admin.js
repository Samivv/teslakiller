import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Form, Button } from 'react-bootstrap';

function AdminPanel() {
    return (
        <>
        <div className="container">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Category
        </Button>
      </Form>    
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
        <option>SELECT A CATEGORY TO ADD TO</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add product
        </Button>
      </Form>
        </div>
        </>
    );
}


export default AdminPanel;