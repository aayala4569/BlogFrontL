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
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "#2f2f2f"}} closeButton>
          <Modal.Title style={{backgroundColor: "#2f2f2f"}}>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#2f2f2f"}}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
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
        
        
            <Button variant="outline-primary">Add Blog Item</Button>
        
      </Container>
    </>
  )
}

export default Dashboard
