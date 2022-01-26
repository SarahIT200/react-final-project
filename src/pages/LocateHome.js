import { useContext } from "react"
import PostCard from "../component/PostCard"
import PlantsContext from "../utils/PlantsContext"

function LocateHome() {
  const { posts, profile } = useContext(PlantsContext)
  let postsLocat = posts.filter(post => post.location.find(location => location === profile.location))
  console.log(postsLocat)
  return (
    <>
      {postsLocat.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}

export default LocateHome
