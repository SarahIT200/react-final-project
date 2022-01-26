import { useContext } from "react"
import { useParams } from "react-router-dom"
import PostCard from "../component/PostCard"
import PlantsContext from "../utils/PlantsContext"
function SearchPost() {
  const { posts } = useContext(PlantsContext)
  const { searchText } = useParams()
  const postsFound = posts.filter(post => post.title === searchText)
  return (
    <>
      {postsFound.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}

export default SearchPost
