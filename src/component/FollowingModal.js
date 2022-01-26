import { Button, Card, Col, Modal, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function FollowingModal(props) {
  const { show, setShow, profile } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Following</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {profile.following.map(followingItem => (
            <>
              <Link to={`/profile/${followingItem._id}`} className="text-success nav-link">
                <Card style={{ width: 450 }}>
                  <Row>
                    <Col>
                      <Card.Img
                        variant="top"
                        src={followingItem?.avatar}
                        style={{ margin: "10px", height: 90, width: 90 }}
                        className="rounded-circle"
                      />
                    </Col>
                    <Col>
                      <Card.Text>{followingItem?.nickName}</Card.Text>
                      <Card.Text className="text-muted">{followingItem?.userName}</Card.Text>
                      <Card.Text className="text-muted">{followingItem?.bio}</Card.Text>
                    </Col>
                  </Row>
                </Card>
              </Link>
            </>
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FollowingModal
