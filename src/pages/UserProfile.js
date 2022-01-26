import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Route, Routes, useParams } from "react-router-dom"
import CommentCard from "../component/CommentCard"
import FollowingModal from "../component/FollowingModal"
import FollowersModal from "../component/FollowersModal"
import PostCard from "../component/PostCard"
import ReplayCard from "../component/ReplayCard"
import PlantsContext from "../utils/PlantsContext"

function UserProfile(props) {
  const { profileId } = useParams()
  const [userProfile, setUserProfile] = useState(null)
  const { profile, follow } = useContext(PlantsContext)
  const [showCategory, setShowCategory] = useState("post")
  const [showFollowin, setFollowingShow] = useState(false)
  const [showFollowers, setFollowersShow] = useState(false)

  //get user profile
  const getUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/profile/${profileId}`)
      setUserProfile(response.data)
      console.log(response.data)
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [profile])

  if (!userProfile) return <h1>Loading</h1>
  if (!profile) return <h1>Loading</h1>
  const followed = userProfile.followers.find(f => f._id === profile._id)

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
              src={userProfile.avatar}
              width="100px"
              style={{ marginLeft: "20px", marginTop: 10 }}
              className="rounded-circle"
            />
          </Col>
          <Col>
            <h5 style={{ marginLeft: "40px", marginTop: 10 }}>{userProfile.nickName}</h5>
            <h6 style={{ marginLeft: "45px" }} className="text-muted">
              {userProfile.userName}
            </h6>
          </Col>
          <Col>
            <Button variant="success" className="ms-3" onClick={() => follow(userProfile._id)}>
              {followed ? <h5>Following</h5> : <h5>Follow</h5>}
            </Button>
          </Col>
          <Row style={{ marginLeft: 100 }}>{userProfile.bio}</Row>
          <Row className="mt-5 ms-4">
            <Col style={{ paddingLeft: 0 }}>
              <Button variant="light" className="btn btn-outline-success" onClick={() => setFollowingShow(true)}>
                {userProfile.following.length}
                Following
              </Button>
            </Col>
            <Col>
              <Button variant="light" className="btn btn-outline-success" onClick={() => setFollowersShow(true)}>
                {userProfile.followers.length}
                Followers
              </Button>
            </Col>
          </Row>
          <Row style={{ marginLeft: 420 }}>{userProfile?.location}</Row>
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
        <Row>
          {showCategory === "post" ? userProfile.posts.map(post => <PostCard post={post} />) : null}
          {showCategory === "comment" ? userProfile.comments.map(comment => <CommentCard comment={comment} />) : null}
          {showCategory === "replies" ? userProfile.replies.map(replay => <ReplayCard replay={replay} />) : null}
          {showCategory === "likes" ? userProfile.likes.map(post => <PostCard post={post} />) : null}
        </Row>
      </Container>
      <FollowingModal show={showFollowin} setShow={setFollowingShow} profile={userProfile} />
      <FollowersModal show={showFollowers} setShow={setFollowersShow} profile={userProfile} />
    </>
  )
}

export default UserProfile
