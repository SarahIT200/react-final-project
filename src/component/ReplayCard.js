import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"
import AddReplayModal from "./AddReplayModal"
import DeleteReplayModal from "./DeleteReplayModal "

function ReplayCard(props) {
  const { replay, commentId, postId } = props
  const { profile } = useContext(PlantsContext)
  const [showDeleteReplay, setShowDeleteReplay] = useState(false)

  return (
    <>
      <Card
        style={{
          marginLeft: 340,

          width: 450,
        }}
      >
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={replay?.owner?.avatar}
              style={{ margin: "10px", height: 50, width: 50 }}
              className="rounded-circle"
            />
          </Col>
          <Col>
            <Card.Text>{replay?.owner?.nickName}</Card.Text>
            <Card.Text className="text-muted">{replay?.owner?.userName}</Card.Text>
          </Col>
        </Row>
        <Row style={{ marginLeft: 80, marginTop: 20, marginRight: 20 }}>
          <p>{replay.replay}</p>
        </Row>
        <Card.Footer>
          {profile._id === replay.owner._id ? (
            <>
              <Button onClick={() => setShowDeleteReplay(true)} variant="success" className="btn">
                Delete
              </Button>
            </>
          ) : null}
        </Card.Footer>
      </Card>
      <DeleteReplayModal
        show={showDeleteReplay}
        setShow={setShowDeleteReplay}
        replay={replay}
        commentId={commentId}
        postId={postId}
      />
    </>
  )
}

export default ReplayCard
