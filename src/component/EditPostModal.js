import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function EditPostModal(props) {
  const { show, setShow, post } = props

  const { editPOst, categorys } = useContext(PlantsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editPOst(e, post._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Type
            </Form.Label>
            <Col md="8">
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="type" value="article" />
                </Col>
                <Col md="2">
                  <span>Article</span>
                </Col>
                <Col md="2">
                  <Form.Check type="radio" name="type" value="quistion" />
                </Col>
                <Col md="2">
                  <span>Quistion</span>
                </Col>
              </Row>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={post.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={post.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Care Way
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="careWay" defaultValue={post.CareWay} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="file" accept="image/png/jpg" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              category
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {categorys.map(category => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="category" value={category._id} checked={post.category} />
                  </Col>
                  <Col md="2">
                    <span>{category.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Location
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              <Row style={{ height: 55, display: "flex", alignItems: "center" }} checked={post.location}>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Albaha" />
                  </Col>
                  <Col>
                    <span>Albaha</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Jeddah" />
                  </Col>
                  <Col>
                    <span>Jeddah</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Alqasim" />
                  </Col>
                  <Col>
                    <span>Alqasim</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Abha" />
                  </Col>
                  <Col>
                    <span>Abha</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Ryadh" />
                  </Col>
                  <Col>
                    <span>Ryadh</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Jazan" />
                  </Col>
                  <Col>
                    <span>Jazan</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Abha" />
                  </Col>
                  <Col>
                    <span>Abha</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Makkah" />
                  </Col>
                  <Col>
                    <span>Makkah</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Almadina" />
                  </Col>
                  <Col>
                    <span>Almadinah</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Araar" />
                  </Col>
                  <Col>
                    <span>Araar</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Tabok" />
                  </Col>
                  <Col>
                    <span>Tabok</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="location" value="Dammam" />
                  </Col>
                  <Col>
                    <span>Dammam</span>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditPostModal
