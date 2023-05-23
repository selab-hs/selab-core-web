import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../state/club/common/club";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";

const Board = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { clubId, boardId } = useParams();
  const posts = useSelector((state) => state.commonClub.posts);

  useEffect(() => {
    dispatch(actions.fetchSelectAllPostsInBoard({ clubId, boardId }));
  }, [dispatch, clubId, boardId]);

  const handleClick = (postId) => {
    dispatch(actions.fetchOnePost({ clubId, boardId, postId }));
    history.push(`/club/${clubId}/board/${boardId}/post/${postId}`);
  };
  return (
    <Wrapper>
      {posts.map(({ postId, title }) => (
        <Card key={postId} onClick={() => handleClick(postId)}>
          <Title>{title}</Title>
        </Card>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 400px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  padding: 5px;
  max-width: 500px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  width: 500px;
  border-radius: 5px;
`;
const Title = styled.span`
  text-align: middle;
`;
export default Board;
