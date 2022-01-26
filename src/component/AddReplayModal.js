import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function AddReplayModal(props) {
  const { show, setShow, comment, postId } = props
  const { addReplay } = useContext(PlantsContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addReplay(e, comment._id, postId)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Replay</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Col md="8">
                <Form.Control as="textarea" name="replay" required />
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

export default AddReplayModal
