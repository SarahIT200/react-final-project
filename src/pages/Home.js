import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import PostCard from "../component/PostCard"
import Search from "../component/Search"
import PlantsContext from "../utils/PlantsContext"

function Home() {
  const { posts } = useContext(PlantsContext)
  return (
    <>
      <Search />

      {/* <FontAwesomeIcon
        icon={faFilter}
        style={{ width: 700, height: 30, marginTop: 10, marginLeft: 400, fixed: "top", color: "green" }}
      /> */}
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}

export default Home
