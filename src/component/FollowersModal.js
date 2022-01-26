import { Button, Card, Col, Modal, Row } from "react-bootstrap"

function FollowersModal(props) {
  const { show, setShow, profile } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Followers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {profile.followers.map(follower => (
            <Card style={{ width: 460 }}>
              <Row>
                <Col>
                  <Card.Img
                    variant="top"
                    src={follower?.avatar}
                    style={{ margin: "10px", height: 90, width: 90 }}
                    className="rounded-circle"
                  />
                </Col>
                <Col>
                  <Card.Text>{follower?.nickName}</Card.Text>
                  <Card.Text className="text-muted">{follower?.userName}</Card.Text>
                  <Card.Text className="text-muted">{follower?.bio}</Card.Text>
                </Col>
              </Row>
            </Card>
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FollowersModal
