/* eslint-disable import/no-anonymous-default-export */
import { actions, Types } from ".";
import { all, call, put, takeLeading } from "redux-saga/effects";
import { createClubApi } from "../../../api/admin/createClubApi";
import { message } from "antd";
import { changeAuthorApi } from "../../../api/admin/changeAuthorApi";

function* fetchCreateClub({ clubName, clubImage, clubBranch }) {
  const result = yield call(createClubApi, {
    url: "/api/club",
    data: {
      name: clubName,
      image: clubImage,
      branch: clubBranch,
    },
  });
  if (result.isSuccess) {
    yield put(actions.setClubIsCreated(true));
    return message.success(result.Message);
  }
  return message.error(result.errorMessage);
}
function* fetchChangeAuthor({ email, name }) {
  const result = yield call(changeAuthorApi, {
    url: "/api/admin",
    data: {
      name,
      email,
    },
  });
  if (result?.isSuccess) {
    return message.success(result.Message);
  }
  return message.error(result.errorMessage);
}
export default function* () {
  yield all([takeLeading(Types.FetchCreateClub, fetchCreateClub)]);
  yield all([takeLeading(Types.FetchChangeAuthor, fetchChangeAuthor)]);
}
