import { Col, Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BsBoxArrowInRight } from "react-icons/bs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import PlantsContext from "../utils/PlantsContext"
import { useContext } from "react"
import Search from "../component/Search"
function NavbarTop() {
  const { logout, profile } = useContext(PlantsContext)
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="https://cdn-icons.flaticon.com/png/512/3968/premium/3968242.png?token=exp=1643115752~hmac=6dfa1641aef69429fbcff677fead00a8"
              style={{ height: 40, width: 30 }}
            />
            <span className="text-success"> Plants</span>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarTop
