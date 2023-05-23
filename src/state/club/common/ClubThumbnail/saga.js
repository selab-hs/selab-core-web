/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import { clubsThumbnailApi } from "../../../../api/common/clubsThumbnailApi";

function* fetchClubThumbnail() {
  const result = yield call(clubsThumbnailApi, {
    url: "/api/clubs",
  });
  if (result.isSuccess) {
    yield put(actions.setClubThumbnail({ thumbnailData: result.thumbnailData }));
  }
}

export default function* () {
  yield all([takeLeading(Types.FetchClubThumbnail, fetchClubThumbnail)]);
}
