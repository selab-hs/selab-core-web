import { createReducer } from "../../../../common/redux-helper";

export const Types = {
  FetchGetClubIntro: "common/FetchGetClubIntro",
  SetGetClubIntro: "common/SetGetClubIntro",
};

export const actions = {
  fetchGetClubIntro: (id) => ({
    type: Types.FetchGetClubIntro,
    id,
  }),
  setGetClubIntro: ({ data }) => ({
    type: Types.SetGetClubIntro,
    data,
  }),
};

const INITIAL_STATE = { introData: null };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetGetClubIntro]: (state, action) => {
    state.introData = action.data;
  },
});

export default reducer;
