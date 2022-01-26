import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function DeletePostModal(props) {
  const { deletePost } = useContext(PlantsContext)
  const { post, show, setShow } = props
  console.log(post)
  console.log(post._id)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Post ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deletePost(post._id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeletePostModal
