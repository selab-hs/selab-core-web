/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import getClubIntroApi from "../../../../api/common/getClubIntroApi";

function* fetchGetClubIntro({ id }) {
  const result = yield call(getClubIntroApi, {
    url: `/api/club/${id}`,
  });
  if (result.isSuccess) {
    yield put(actions.setGetClubIntro({ data: result.thumbnailData }));
  }
}

export default function* () {
  yield all([takeLeading(Types.FetchGetClubIntro, fetchGetClubIntro)]);
}
