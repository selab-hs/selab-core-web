import { Modal } from "antd"
import { useCallback, useState } from "react"
import {useDispatch} from 'react-redux'
import { Input } from "./style"
import { actions as ClubData } from "../../state/club/minAd/"
const CreateBoard = ({ visible, setVisible, clubId}) => {
  const dispatch = useDispatch()
  const [boardName, setBoardName] = useState('')

  const handleOk = useCallback(() => {
    dispatch(ClubData.fetchCreateBoard({clubId,boardName }))
    setBoardName('')
    setVisible(false)
  }, [setVisible, dispatch,boardName, clubId])

  const handleCancel = useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const handleInputChange = useCallback((e) => {
    setBoardName(e.target.value)
  }, [])
  
  return (
    <Modal title="생성할 게시판 이름을 적어주세요" visible={visible} onOk={handleOk} onCancel={handleCancel} >
      <Input onChange={handleInputChange} value={boardName} />
    </Modal>
  )
}

export default CreateBoard