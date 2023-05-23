import { createReducer } from "../../../../common/redux-helper";

export const Types = {
  FetchClubThumbnail: "common/FetchClubThumbnail",
  SetClubThumbnail: "common/SetClubThumbnail",
};

export const actions = {
  fetchClubThumbnail: () => ({
    type: Types.FetchClubThumbnail,
  }),
  setClubThumbnail: ({ thumbnailData }) => ({
    type: Types.SetClubThumbnail,
    thumbnailData,
  }),
};

const INITIAL_STATE = { thumbnailData: null };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetClubThumbnail]: (state, action) => {
    state.thumbnailData = action.thumbnailData;
  },
});

export default reducer;
