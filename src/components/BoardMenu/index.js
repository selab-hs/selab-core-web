import { Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actions } from "../../state/club/common/club";
import { useHistory } from "react-router-dom";

const BoardMenu = ({ clubId }) => {
  const { boards } = useSelector((state) => state.commonClub);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSelectAllBoard({ clubId }));
  }, [clubId, dispatch]);

  const handleBoardClick = (e) => {
    const { boardId } = e.target.dataset;
    dispatch(actions.fetchSelectAllPostsInBoard({ clubId, boardId }));
    history.push(`/club/${clubId}/board/${boardId}`);
  };
  return (
    <Wrapper>
      <ul>
        {boards.length > 0 &&
          boards.map(({ boardName, boardId }) => (
            <li key={boardId} data-board-id={boardId} onClick={handleBoardClick}>
              {boardName}
            </li>
          ))}
      </ul>
    </Wrapper>
  );
};
export default BoardMenu;
