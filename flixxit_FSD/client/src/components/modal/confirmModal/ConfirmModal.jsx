import { createPortal } from "react-dom"
import MyListModal from "./MyListModal"
import { useDispatch, useSelector } from "react-redux"
import { closeModal, openModal } from "../../../redux/features/modalSlice"
import "./confirmModal.scss"

const ConfirmModal = ({ movies }) => {
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const handleModal = () => {
    dispatch(openModal())
  }

  return (
    <>
      <button
        className="modalBtn"
        onClick={handleModal}
      >
        Clear List
      </button>
      {isOpen &&
        createPortal(
          <MyListModal onClose={() => dispatch(closeModal())} />,
          document.body
        )}
    </>
  )
}

export default ConfirmModal
