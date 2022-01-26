import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function DeleteReplayModal(props) {
  const { deleteReplay } = useContext(PlantsContext)
  const { replay, show, setShow, postId, commentId } = props
  console.log(postId)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Replay</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Replay ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteReplay(replay._id, commentId, postId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteReplayModal
