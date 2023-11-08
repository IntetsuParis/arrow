import styles from "./Modal.module.css"

import cn from "classnames"

import { Button } from "../../../UI"

import { useAppDispatch } from "../../../../app/hooks"

import { resetStore } from "../../store/slices"

import ResultMessage from "../ResultMessage"

import { Modal as MaterialModal } from "@mui/material"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props

  const dispatch = useAppDispatch()

  const handleClose = () => {
    setIsShowModal(false)
    dispatch(resetStore())
  }

  return (
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isSuccessEndGame ? styles.ModalSuccess : styles.ModalUnsuccess,
        )}
      >
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button onClick={handleClose} className={styles.button}>
          Start new game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
