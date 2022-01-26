import { useContext } from "react"
import { useParams } from "react-router-dom"
import CommentCard from "../component/CommentCard"
import PostCard from "../component/PostCard"
import PlantsContext from "../utils/PlantsContext"

function OnePost() {
  const { postId } = useParams()
  const { posts } = useContext(PlantsContext)

  const post = posts.find(post => post._id === postId)
  if (!post) return <h1>loading</h1>
  return (
    <>
      <PostCard post={post} />

      {post.comments.map(comment => (
        <CommentCard key={comment._id} comment={comment} postId={postId} />
      ))}
    </>
  )
}

export default OnePost
