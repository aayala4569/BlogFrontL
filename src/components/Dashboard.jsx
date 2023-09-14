import {Button,Container,Form,Modal} from 'react-bootstrap';
import { useState } from 'react';



const Dashboard = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
      <Button className="me-3" variant="outline-primary" onClick={handleShow}>
       Add Blog Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "#2f2f2f"}} closeButton>
          <Modal.Title style={{backgroundColor: "#2f2f2f"}}>Add Blog Item</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#2f2f2f"}}>
        <Form>
      <Form.Group className="mb-3" controlId="Title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="Text" placeholder="Enter Title" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="Text" placeholder="Enter Description" />
      </Form.Group>
     
      
    </Form>

<Form.Group className="mb-3" controlId="Category">
      <Form.Select aria-label="Default select example">
      <option>Select Category</option>
      <option value="Food">Food</option>
      <option value="Fitness">Fitness</option>
      <option value="Sport">Sports</option>
      <option value="Tech">Tech</option>
        </Form.Select>
      </Form.Group>


      <Form.Group className="mb-3" controlId="Tags">
        <Form.Label>Tags</Form.Label>
        <Form.Control type="text" placeholder="Enter Tags"/>
        
      </Form.Group>





        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#2f2f2f"}}>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    

      </Modal>
        
      
        
            <Button variant="outline-primary">Edit Blog Item</Button>
        
      </Container>
    </>
  )
}

export default Dashboard
