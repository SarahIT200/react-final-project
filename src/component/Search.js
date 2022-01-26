import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Button, Col, Form, FormControl, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function Search() {
  const { posts, users, search } = useContext(PlantsContext)
  return (
    <Form style={{ width: 700, marginTop: 90, marginLeft: 360, fixed: "top" }} onSubmit={search}>
      <Row>
        <Col style={{ marginLeft: 0, padding: 0 }}>
          <FormControl type="search" name="search" placeholder="Search" className="me-2" aria-label="Search" />
        </Col>
        <datalist id="plantsSearch">
          {posts.map(post => (
            <option value={post.title} />
          ))}
          {users.map(user => (
            <option value={user.userName} />
          ))}
        </datalist>
        <Col style={{ marginLeft: 2 }}>
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Search
