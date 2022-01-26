import { faPlusCircle, faStreetView } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { BsHouseDoor } from "react-icons/bs"
// import { FaMapMarkerAlt, FaStreetView } from "react-icons/fa"
import { Link } from "react-router-dom"
import AddPostModal from "./AddPostModal"
function NavbarBottom() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Container>
          <Nav className="me-auto">
            <Link to="/">
              <BsHouseDoor style={{ color: "green", height: 40, width: 30 }} />
            </Link>
            <Link to="/locate-home">
              {/* <i class="fa-street-view"></i> */}
              <FontAwesomeIcon
                icon={faStreetView}
                style={{ color: "green", height: 25, width: 30, marginLeft: 20, marginTop: 9 }}
              />
              {/* <i class="fas fa-plus-circle"></i> */}
            </Link>
            <FontAwesomeIcon
              icon={faPlusCircle}
              style={{ color: "green", height: 25, width: 30, marginLeft: 950, marginTop: 9 }}
              onClick={() => setShow(true)}
            />
          </Nav>
        </Container>
      </Navbar>
      <AddPostModal show={show} setShow={setShow} />
    </>
  )
}

export default NavbarBottom
