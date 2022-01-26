import { useContext } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"
import { Link } from "react-router-dom"
function Login() {
  const { login } = useContext(PlantsContext)
  return (
    <div className="ms-4">
      <h1 style={{ marginLeft: 340, marginTop: "10%" }}>Login</h1>
      <Form className="mt-5" onSubmit={login} style={{ marginLeft: 340, width: 600 }}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
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
          <Form.Label column md={{ span: 10, offset: 2 }}>
            <Link to="/forgot-password" className="btn btn-outline-success">
              Forgot password
            </Link>
          </Form.Label>
        </Form.Group>
        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit" style={{ backgroundColor: "green", border: "none" }}>
              Login
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login
