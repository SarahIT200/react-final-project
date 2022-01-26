import { faCommentDots, faReplyAll } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"
import AddReplayModal from "./AddReplayModal"
import DeleteCommentModal from "./DeleteCommentModal"
import ReplayCard from "./ReplayCard"

function CommentCard(props) {
  const { comment, postId } = props
  const { profile } = useContext(PlantsContext)
  const [show, setShow] = useState(false)
  const [showReplies, setShowReplies] = useState("")
  const [showDeleteComment, setShowDeleteComment] = useState(false)
  console.log(comment.owner._id)
  return (
    <>
      <Card style={{ marginLeft: 340, width: 450 }}>
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={comment?.owner?.avatar}
              style={{ margin: "10px", height: 50, width: 50 }}
              className="rounded-circle"
            />
          </Col>
          <Col>
            <Card.Text>{comment?.owner?.nickName}</Card.Text>
            <Card.Text className="text-muted">{comment?.owner?.userName}</Card.Text>
          </Col>
        </Row>
        <Row style={{ marginLeft: 80, marginTop: 20, marginRight: 20 }}>
          <p>{comment.comment}</p>
        </Row>
        <Card.Footer>
          <Row>
            {/* <i class="far fa-comment-dots"></i> */}
            {/* comment */}
            <Col>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ height: 25, width: 30, marginTop: 9 }}
                className="text-success"
                onClick={() => setShow(true)}
              />
              <p>{comment.replies.length}</p>
            </Col>
            <Col>
              {/* <i class="fab fa-replyd"></i> */}
              {/* <i class="fas fa-reply-all"></i> */}
              <FontAwesomeIcon
                icon={faReplyAll}
                style={{ height: 25, width: 30, marginTop: 9 }}
                className="text-success"
                onClick={() => setShowReplies("replies")}
              />
            </Col>
            <Col>
              {profile._id === comment.owner ? (
                <>
                  <Button onClick={() => setShowDeleteComment(true)} variant="success" className="btn">
                    Delete
                  </Button>
                </>
              ) : null}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Row>
        {showReplies === "replies"
          ? comment.replies.map(replay => <ReplayCard replay={replay} commentId={comment._id} postId={postId} />)
          : null}
      </Row>
      <AddReplayModal show={show} setShow={setShow} comment={comment} postId={postId} />
      <DeleteCommentModal show={showDeleteComment} setShow={setShowDeleteComment} comment={comment} postId={postId} />
    </>
  )
}

export default CommentCard
