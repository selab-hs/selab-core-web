import { createReducer } from "../../../../common/redux-helper";

export const Types = {
  FetchSelectAllBoard: "common/FetchSelectAllBoard",
  SetSelectAllBoard: "common/SetSelectAllBoard",
  FetchSelectAllPostsInBoard: "common/FetchSelectAllPostsInBoard",
  SetSelectAllPostsInBoard: "common/SetSelectAllPosts",
  FetchOnePost: "common/FetchOnePost",
  SetOnePost: "common/SetOnePost",
};

export const actions = {
  fetchSelectAllBoard: ({ clubId }) => ({
    type: Types.FetchSelectAllBoard,
    clubId,
  }),
  setSelectAllBoard: ({ data }) => ({
    type: Types.SetSelectAllBoard,
    data,
  }),
  fetchSelectAllPostsInBoard: ({ clubId, boardId }) => ({
    type: Types.FetchSelectAllPostsInBoard,
    clubId,
    boardId,
  }),
  setSelectAllPostsInBoard: ({ data }) => ({
    type: Types.SetSelectAllPostsInBoard,
    data,
  }),
  fetchOnePost: ({ clubId, boardId, postId }) => ({
    type: Types.FetchOnePost,
    clubId,
    boardId,
    postId,
  }),
  setOnePost: ({ data }) => ({
    type: Types.SetOnePost,
    data,
  }),
};

const INITIAL_STATE = {
  boards: [],
  posts: [{ clubId: null, boardId: null, postId: null, title: null }],
  post: { clubId: null, boardId: null, postId: null, title: null, content: null, memberId: null },
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetSelectAllBoard]: (state, action) => {
    state.boards = action.data;
  },
  [Types.SetSelectAllPostsInBoard]: (state, action) => {
    state.posts = action.data;
  },
  [Types.SetOnePost]: (state, action) => {
    state.post = action.data;
  },
});

export default reducer;
