// import { faSpinner } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useRef, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import EditProfileModal from "../component/EditProfileModal"
import FollowingModal from "../component/FollowingModal"
import FollowersModal from "../component/FollowersModal"
import PostCard from "../component/PostCard"
import PlantsContext from "../utils/PlantsContext"
import CommentCard from "../component/CommentCard"
import ReplayCard from "../component/ReplayCard"

function MyProfile() {
  const { profile, posts } = useContext(PlantsContext)
  const [showEdit, setEditShow] = useState(false)
  const [showFollowin, setFollowingShow] = useState(false)
  const [showFollowers, setFollowersShow] = useState(false)
  const [showCategory, setShowCategory] = useState("post")

  if (!profile) return <h1>Loading</h1>
  console.log(profile)
  //  <FontAwesomeIcon icon={faSpinner} />

  return (
    <>
      <Container style={{ width: 500, marginLeft: 490, position: "relative", top: 50, right: 175, paddingLeft: 0 }}>
        <Row
          className="text-success"
          style={{
            border: "solid 1px ",
            position: "relative",

            top: 60,
            marginLeft: 0,
            width: 500,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col md="2">
            <img
              variant="top"
              src={profile.avatar}
              width="100px"
              style={{ marginLeft: "20px", marginTop: 10 }}
              className="rounded-circle"
            />
          </Col>
          <Col>
            <h5 style={{ marginLeft: "40px", marginTop: 10 }}>{profile.nickName}</h5>
            <h6 style={{ marginLeft: "45px" }} className="text-muted">
              {profile.userName}
            </h6>
          </Col>
          <Col>
            <Button
              variant="light"
              className="btn btn-outline-success"
              style={{ marginLeft: 100, marginTop: 0, width: 70 }}
              onClick={() => setEditShow(true)}
            >
              Edit
            </Button>
          </Col>
          <Row style={{ marginLeft: 100 }}>{profile.bio}</Row>
          <Row className="mt-5 ms-4">
            <Col>
              <Button
                variant="light"
                className="btn btn-outline-success"
                onClick={() => setFollowingShow(true)}
                style={{ paddingLeft: 10, marginLeft: 40 }}
              >
                {profile.following.length}
                Following
              </Button>
            </Col>
            <Col>
              <Button variant="light" className="btn btn-outline-success" onClick={() => setFollowersShow(true)}>
                {profile.followers.length}
                Followers
              </Button>
            </Col>
          </Row>
          <Row style={{ marginLeft: 420 }}>{profile.location}</Row>
        </Row>
        <Row className="mt-5"></Row>
      </Container>
      <Container style={{ marginLeft: 5, width: 400, position: "relative", top: -2 }} className="text-success">
        <Row
          style={{ marginTop: 65, display: "flex", alignItems: "center", width: 550, marginLeft: 285, color: "green" }}
        >
          <Col>
            <Button onClick={() => setShowCategory("post")} variant="success" style={{ width: 100 }}>
              Posts
            </Button>
          </Col>
          <Col>
            <Button onClick={() => setShowCategory("comment")} variant="success">
              Comment
            </Button>
          </Col>
          <Col>
            <Button onClick={() => setShowCategory("replies")} variant="success" style={{ width: 90 }}>
              Replies
            </Button>
          </Col>
          <Col>
            <Button onClick={() => setShowCategory("likes")} variant="success" style={{ width: 90 }}>
              Likes
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            width: 1000,
            marginLeft: 5,
            width: 400,
            position: "relative",
            top: 0,
          }}
          variant="success"
        >
          {showCategory === "post" ? profile.posts.map(post => <PostCard post={post} />) : null}
          {showCategory === "comment" ? profile.comments.map(comment => <CommentCard comment={comment} />) : null}
          {showCategory === "replies" ? profile.replies.map(replay => <ReplayCard replay={replay} />) : null}
          {showCategory === "likes" ? profile.likes.map(post => <PostCard post={post} />) : null}
          {/* </div> */}
        </Row>
      </Container>
      <EditProfileModal show={showEdit} setShow={setEditShow} />
      <FollowingModal show={showFollowin} setShow={setFollowingShow} profile={profile} />
      <FollowersModal show={showFollowers} setShow={setFollowersShow} profile={profile} />
    </>
  )
}

export default MyProfile
