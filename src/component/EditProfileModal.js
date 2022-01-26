import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function EditProfileModal(props) {
  const { editProfile, profile } = useContext(PlantsContext)
  const { show, setShow } = props
  const locations = [
    "Albaha",
    "Jeddah",
    "AlQasim",
    "Makkah",
    "AlMadinah",
    "Abha",
    "Dammam",
    "Tabok",
    "Jazan",
    "Najran",
    "Araar",
  ]
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={editProfile}>
          <Modal.Header closeButton>
            <Modal.Title>Edit profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                userName
              </Form.Label>
              <Col md="6">
                <Form.Control type="text" defaultValue={profile.userName} name="userName" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                NickName
              </Form.Label>
              <Col md="6">
                <Form.Control type="text" defaultValue={profile.nickName} name="nickName" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                Password
              </Form.Label>
              <Col md="6">
                <Form.Control type="password" name="password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                Bio
              </Form.Label>
              <Col md="6">
                <Form.Control as="textarea" defaultValue={profile?.bio} name="bio" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                Avatar
              </Form.Label>
              <Col md="6">
                <Form.Control type="file" accept="image/png/jpg" name="avatar" required />
              </Col>
            </Form.Group>
            <Row>
              {/* <Col md="8">{errorSignup !== null ? <Alert variant="danger">{errorSignup}</Alert> : null}</Col> */}
            </Row>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Location
              </Form.Label>
              <Col md="6" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  {locations.map(location => (
                    <Row>
                      <Col md="2">
                        <Form.Check
                          type="radio"
                          name="location"
                          value={location}
                          defaultChecked={profile.location === location}
                        />
                      </Col>
                      <Col>
                        <span>{location}</span>
                      </Col>
                    </Row>
                  ))}
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
    </>
  )
}

export default EditProfileModal
