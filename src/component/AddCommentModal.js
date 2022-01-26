import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function AddCommentModal(props) {
  const { show, setShow, post } = props
  const { addComment } = useContext(PlantsContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addComment(e, post._id)}>
          <Modal.Header closeButton>
            <Modal.Title>Add comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Col md="8">
                <Form.Control as="textarea" name="comment" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={() => setShow(false)}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddCommentModal
