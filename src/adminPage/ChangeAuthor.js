import { Input, Modal } from "antd";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actions } from "../state/club/admin";
const ChangeAuthor = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [club, setClub] = useState("");

  const handleCancel = useCallback(() => {
    setEmail("");
    setClub("");
    setVisible(false);
  }, [setVisible]);
  const handleEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const handleClub = useCallback((e) => {
    setClub(e.target.value);
  }, []);
  const handleOk = useCallback(() => {
    dispatch(actions.fetchChangeAuthor({ name: club, email }));
  }, [club, email, dispatch]);
  return (
    <Modal title="권한 변경하기" visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <ModalInner>
        <StyledInput placeholder="이메일을 입력해 주세요" onChange={handleEmail} value={email} />
        <StyledInput placeholder="동아리명을 입력해 주세요" onChange={handleClub} value={club} />
      </ModalInner>
    </Modal>
  );
};

const StyledInput = styled(Input)`
  margin: 10px 0;
  border: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.3);
  border-radius: 4px;
  &:hover,
  &:focus {
    border: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.5);
  }
`;
const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;
export default ChangeAuthor;
