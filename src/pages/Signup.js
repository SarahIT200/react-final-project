import { useContext } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function Signup() {
  const { signup } = useContext(PlantsContext)
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
    <div className="ms-4 mt-5">
      <h1 style={{ marginLeft: 340, marginTop: 100 }}>Sign Up</h1>
      <Form className="mt-5" onSubmit={signup} style={{ marginLeft: 340, width: 600 }}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control name="email" type="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            userName
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" name="userName" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            NickName
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" name="nickName" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
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
          <Form.Label column md="2" style={{ marginRight: 13 }}>
            Location
          </Form.Label>
          <Col md="6" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray", width: 290 }}>
            <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
              {locations.map(location => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="location" value={location} />
                  </Col>
                  <Col>
                    <span>{location}</span>
                  </Col>
                </Row>
              ))}
            </Row>
          </Col>
        </Form.Group>
        {/* <Form.Label column md="3">
            Location
          </Form.Label>
          <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
            <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Albaha" />
                </Col>
                <Col>
                  <span>Albaha</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Jeddah" />
                </Col>
                <Col>
                  <span>Jeddah</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Alqasim" />
                </Col>
                <Col>
                  <span>Alqasim</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Abha" />
                </Col>
                <Col>
                  <span>Abha</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Ryadh" />
                </Col>
                <Col>
                  <span>Ryadh</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Jazan" />
                </Col>
                <Col>
                  <span>Jazan</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Abha" />
                </Col>
                <Col>
                  <span>Abha</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Makkah" />
                </Col>
                <Col>
                  <span>Makkah</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Almadina" />
                </Col>
                <Col>
                  <span>Almadinah</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Araar" />
                </Col>
                <Col>
                  <span>Araar</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Tabok" />
                </Col>
                <Col>
                  <span>Tabok</span>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Form.Check type="radio" name="location" value="Dammam" />
                </Col>
                <Col>
                  <span>Dammam</span>
                </Col>
              </Row>
            </Row>
          </Col> */}
        {/* </Form.Group> */}
        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit" style={{ backgroundColor: "green", border: "none" }}>
              Sign Up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Signup
