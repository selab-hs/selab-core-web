import axios from "axios";
import { API_SUCCESS, BAD_REQUEST, SERVER_ERROR } from "../constant";
import { getUrlAndToken } from "../util/getUrlAndToken";

export async function createResumeApi({ url, data }) {
  let token = null;
  [url, token] = getUrlAndToken(url, "x-auth");
  try {
    const result = await axios({
      url,
      method: "Post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    if (result.status !== API_SUCCESS) {
      return { isSuccess: false, message: "서버에서 에러가 났습니다. 새로 고침 후 다시 시도해 주세요" };
    }
    return { isSuccess: true };
  } catch ({ response }) {
    const status = response.status;
    let message = response.data ? response.data.message : response.message;
    if (status === SERVER_ERROR) {
      return { isSuccess: false, message: "서버에서 에러가 났습니다. 다시 시도해주세요." };
    }
    if (status === BAD_REQUEST) {
      if (message === "INVALID_MEMBER_NAME") {
        return { isSuccess: false, message: "적절한 양식이 아닙니다." };
      }
      if (message === "INVALID_MEMBER_EMAIL") {
        return { isSuccess: false, message: "유효하지 않은 이메일입니다. 다시 회원가입해주세요." };
      }
      if (message === "NOT_EXIST_MEMBER") {
        return { isSuccess: false, message: "존재하지 않는 사용자입니다." };
      }
      if (message === "NOT_EXIST_CLUB") {
        return { isSuccess: false, message: "존재하지 않는 클럽입니다." };
      }
    }
    return { isSuccess: false, message };
  }
}
