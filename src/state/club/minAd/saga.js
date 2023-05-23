/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { Types } from ".";
import { createClubIntroApi } from "../../../api/minAd/createClubIntroApi";
import showClubResumeApi from "../../../api/minAd/showClubResumeApi";
import { actions } from ".";
import { message } from "antd";
import createBoard from "../../../api/minAd/createBoard";

function* fetchClubIntro({ description }) {
  const result = yield call(createClubIntroApi, {
    url: "/api/club",
    data: {
      description,
    },
  });
}
function* fetchShowClubResume({ clubId }) {
  const {
    isSuccess,
    message: apiMessage,
    data,
  } = yield call(showClubResumeApi, {
    url: `/api/club/${clubId}/subscription`,
  });
  if (isSuccess) {
    yield put(actions.setShowClubResume({ resumeData: data }));
    apiMessage && message.success(apiMessage);
    return;
  }
  if (!isSuccess) {
    message.error(apiMessage);
  }
}
function* fetchCreateBoard({boardName ,clubId}) {
  const data = yield call(createBoard, {
    url: `/api/club/${clubId}/board`,
    data: {
      name: boardName,
      description: boardName
    }
  })
}

export default function* () {
  yield all([
    takeLeading(Types.FetchClubIntro, fetchClubIntro), 
    takeLeading(Types.FetchShowClubResume, fetchShowClubResume), 
    takeLeading(Types.FetchCreateBoard, fetchCreateBoard)]);
}
