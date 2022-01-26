import { faPlusCircle, faStreetView } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Alert, Col, Container, ListGroup, Nav, Navbar, Row } from "react-bootstrap"
import { BsHouseDoor } from "react-icons/bs"
// import { FaMapMarkerAlt, FaStreetView } from "react-icons/fa"
import { Link } from "react-router-dom"
import AddPostModal from "./AddPostModal"
import { BsBoxArrowInRight } from "react-icons/bs"
import Search from "../component/Search"
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import PlantsContext from "../utils/PlantsContext"
import { useContext } from "react"
function Sidebar() {
  const { logout, profile } = useContext(PlantsContext)
  const [show, setShow] = useState(false)

  return (
    <>
      {/* <ListGroup style={{ position: "fixed", left: 850, top: 100 }}>
        <ListGroup.Item style={{ width: 300 }}> */}
      {/* <Row style={{ width: 450 }}>
            <Search />
          </Row> */}
      <Alert variant="success" style={{ position: "fixed", left: 850, top: 100, width: 300 }}>
        <Row>
          <Link to="/" className="text-success nav-link" style={{ display: "flex", alignItems: "center" }}>
            <BsHouseDoor style={{ height: 40, width: 30, marginLeft: 20, marginTop: 1 }} />
            <span>Home</span>
          </Link>
        </Row>
        <Row>
          <Link to="/locate-home" className="text-success nav-link">
            {/* <i class="fa-street-view"></i> */}
            <FontAwesomeIcon icon={faStreetView} style={{ height: 25, width: 30, marginLeft: 20, marginTop: 20 }} />
            <span>location posts</span>
            {/* <i class="fas fa-plus-circle"></i> */}
          </Link>
        </Row>

        <Row>
          {localStorage.tokenPlants ? (
            <>
              <Row
                className="text-success"
                // style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 0 }}
              >
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  style={{ height: 25, width: 50, marginLeft: 25, marginTop: 20 }}
                  onClick={() => setShow(true)}
                />

                <span style={{ marginTop: 1, position: "absolute", right: -60, top: 157 }}>Add post</span>
              </Row>
              <Row>
                <Link to="/my-profile" style={{ marginTop: 200 }} className="text-success nav-link">
                  <img src={profile?.avatar} height="40" style={{ borderRadius: 50, marginLeft: 20 }} />
                  <span style={{ marginLeft: 10 }}>{profile?.nickName}</span>
                </Link>
              </Row>
              <Row>
                <Link
                  to="/"
                  className="text-success nav-link"
                  style={{ marginLeft: 15, display: "flex", alignItems: "center" }}
                  onClick={logout}
                >
                  <BsBoxArrowInRight style={{ height: 40, width: 30, marginTop: 10, marginRight: 8 }} />
                  <span>logout</span>
                </Link>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Link to="/signup" className="text-success nav-link">
                  {/* <i class="fas fa-user-plus"></i> */}
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ height: 25, width: 30, marginLeft: 22, marginTop: 200 }}
                  />
                  <span>signup</span>
                </Link>
              </Row>
              <Row>
                <Link to="/login" className="text-success nav-link">
                  <i class="fas fa-sign-in-alt"></i>
                  <FontAwesomeIcon
                    icon={faSignInAlt}
                    style={{ height: 25, width: 30, marginTop: 15, marginLeft: 20 }}
                  />
                  <span>login</span>
                </Link>
              </Row>
            </>
          )}
        </Row>
      </Alert>
      {/* </ListGroup.Item>
      </ListGroup> */}
      <AddPostModal show={show} setShow={setShow} />
    </>
  )
}

export default Sidebar
