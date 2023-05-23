import { createReducer } from "../../../common/redux-helper";

export const Types = {
  FetchCreateClub: "admin/FetchCreateClub",
  SetClubIsCreated: "admin/SetClubIsCreated",
  FetchChangeAuthor: "admin/FetchChangeAuthor",
};

export const actions = {
  fetchCreateClub: ({ clubName, clubImage, clubBranch }) => ({
    type: Types.FetchCreateClub,
    clubName,
    clubImage,
    clubBranch,
  }),
  setClubIsCreated: (isCreated) => ({
    type: Types.SetClubIsCreated,
    isCreated,
  }),
  fetchChangeAuthor: ({ email, name }) => ({
    type: Types.FetchChangeAuthor,
    email,
    name,
  }),
};
const INITIAL_STATE = { isCreated: false };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetClubIsCreated]: (state, action) => {
    state.isCreated = action.isCreated;
  },
});
export default reducer;
