import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Post = () => {
  const post = useSelector((state) => state.commonClub.post);
  return (
    <TopWrapper>
      <Header>
        <h1 style={{ margin: "0 0 0 10px", padding: 0 }}>{post.title}</h1>
      </Header>
      <div>
        <Content dangerouslySetInnerHTML={{ __html: post.content }} />
        <SetClubIntro to={`/createClub/`}>클럽 인트로 수정하기</SetClubIntro>
      </div>
    </TopWrapper>
  );
};

const TopWrapper = styled.div`
  margin-top: 82px;
  height: 100vh;
`;
const Header = styled.div`
  padding: 100px 0 10px 50px;
  display: flex;
  box-sizing: border-box;
  align-items: baseline;
  border-bottom: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.5);
  position: relative;
`;

const SetClubIntro = styled(Link)`
  position: absolute;
  top: 170px;
  right: 50px;
  z-index: 1;
  outline: none;
  border: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.5);
  background-color: rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.3);
  width: fit-content;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding: 5px;
  color: black;
  &:hover {
    background-color: rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.5);
    color: black;
  }
`;
const Content = styled.div`
  max-width: 1080px;
  margin: 30px auto 0;
`;

export default Post;
