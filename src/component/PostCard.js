import { faCommentDots, faEdit, faHeart, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"
import AddCommentModal from "./AddCommentModal"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { Link } from "react-router-dom"
import EditPostModal from "./EditPostModal"
import DeletePostModal from "./DeletePostModal"

function PostCard(props) {
  const { post } = props
  const [showAddComment, setShowAddComment] = useState(false)
  const [showEditPost, setShowEditPost] = useState(false)
  const [showDeletPost, setshowDeletPost] = useState(false)

  const { likePost, profile } = useContext(PlantsContext)
  if (!profile) return <h1>Loading</h1>
  const liked = post.likes.includes(profile._id)
  return (
    <>
      <Card style={{ marginLeft: 340, marginTop: "7%", width: 450 }}>
        <Link to={`/profile/${post.owner._id}`} className="text-success nav-link">
          <Row style={{ hieght: 10 }}>
            <Col style={{ width: 0 }}>
              <Card.Img
                variant="top"
                src={post?.owner?.avatar}
                style={{ height: 35, width: 35 }}
                className="rounded-circle"
              />
            </Col>
            <Col>
              <Card.Text>{post?.owner?.nickName}</Card.Text>
              <Card.Text className="text-muted">{post?.owner?.userName}</Card.Text>
            </Col>
          </Row>
        </Link>
        <Row>
          <Col>
            <Link to={`/post/${post._id}`} className="text-success nav-link">
              <Card.Img variant="top" src={post.image} height={171} width={180} />
            </Link>
          </Col>
          <Col>
            <Row>
              <Card.Title>{post.title}</Card.Title>
            </Row>
            <Row>
              <Card.Text>{post.category.name}</Card.Text>
            </Row>
            <Row>
              <small className="text-muted">
                {post.location.map(location => (
                  <span>{location}, </span>
                ))}
              </small>
            </Row>
          </Col>
        </Row>
        <Card.Body>
          <Card.Text>{post.description}</Card.Text>
          <Card.Text>
            <h6 style={{ display: "inline" }}>Care way:</h6> {post.CareWay}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ hieght: 50 }}>
          <Row>
            <Col>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ height: 25, width: 30, marginTop: 10, color: "green" }}
                onClick={() => setShowAddComment(true)}
              />

              <span style={{ color: "green" }}> {post.comments.length}</span>
            </Col>
            {/* like */}
            <Col>
              <Button variant="light" className="ms-3" onClick={() => likePost(post._id)}>
                {liked ? (
                  <MdFavorite style={{ color: "green", height: 40, width: 20 }} />
                ) : (
                  <MdOutlineFavoriteBorder style={{ color: "green", height: 40, width: 20 }} />
                )}
              </Button>
              <span style={{ color: "green" }}> {post.likes.length}</span>
            </Col>
            <Col>
              {profile._id === post.owner._id ? (
                <>
                  <Button variant="light" className="btn" style={{ marginRight: 5 }}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ color: "green", height: 40, width: 20 }}
                      onClick={() => setShowEditPost(true)}
                    />
                  </Button>
                  <Button onClick={() => setshowDeletPost(true)} variant="light" className="btn">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      style={{ color: "green", height: 40, width: 20 }}
                      onClick={() => setshowDeletPost(true)}
                    />
                  </Button>
                </>
              ) : null}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <AddCommentModal show={showAddComment} setShow={setShowAddComment} post={post} />
      <EditPostModal show={showEditPost} setShow={setShowEditPost} post={post} />
      <DeletePostModal show={showDeletPost} setShow={setshowDeletPost} post={post} />
    </>
  )
}

export default PostCard
