import { message, Modal } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { createResumeApi } from "../../api/common/createResumeApi";

const ClubResumeModal = ({ visible, setVisible, clubId }) => {
  const [resume, setResume] = useState("");
  const handleCancel = () => {
    setVisible(false);
  };
  const handleTextareaChange = (e) => {
    setResume(e.target.value);
  };
  const handleOk = async () => {
    const { isSuccess, message: apiMessage } = await createResumeApi({ url: `/api/club/${clubId}/subscription`, data: { resume } });
    if (isSuccess) {
      message.success("자기 소개를 전송하였습니다! 결화는 개별적으로 알려드립니다❤️");
    } else {
      message.error(apiMessage);
    }
  };
  return (
    <Modal title="자기 소개서를 등록해주세요❤️" visible={visible} onOk={handleOk} onCancel={handleCancel} onOk={handleOk}>
      <ModalInner>
        <StyledTextarea value={resume} onChange={handleTextareaChange} placeholder="자기 소개서를 등록해주세요❤️" />
      </ModalInner>
    </Modal>
  );
};

const StyledTextarea = styled.textarea`
  width: 400px;
  height: 300px;
  resize: none;
  border-radius: 5px;
  outline: none;
  border: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.3);
  &:focus {
    border: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.7);
  }
`;
const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export default ClubResumeModal;
