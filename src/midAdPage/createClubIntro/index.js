import React, { useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../state/club/minAd";

import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

const CreateClubIntro = () => {
  const dispatch = useDispatch();
  const editRef = useRef();
  const history = useHistory();
  const { clubId } = useParams();
  const description = useSelector((state) => state.clubDataStore.introData.description);
  const handleClick = useCallback(() => {
    const editor = editRef.current.getInstance();
    if (editor) {
      dispatch(actions.fetchClubIntro({ description: editor.getHTML() }));
      history.push(`/club/${clubId}`);
    }
  }, [dispatch, history, clubId]);
  useEffect(() => {
    editRef.current.getInstance().setHTML(description);
  });
  return (
    <TopWrapper>
      <Editor height={"80%"} ref={editRef} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
      <StyledButton onClick={handleClick}>저장</StyledButton>
    </TopWrapper>
  );
};
export default CreateClubIntro;

const TopWrapper = styled.div`
  margin-top: 82px;
  height: 100vh;
`;
const StyledButton = styled.button`
  background-color: rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.3);
  margin-left: 87%;
  outline: none;
  border: 0;
  width: 100px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.7);
  }
`;
