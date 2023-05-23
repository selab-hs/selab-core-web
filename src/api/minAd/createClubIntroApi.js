import axios from "axios";
import { API_SUCCESS, BAD_REQUEST } from "../constant";
import { getUrlAndToken } from "../util/getUrlAndToken";

export async function createClubIntroApi({ url, data }) {
  let token = null;
  [url, token] = getUrlAndToken(url, "x-auth");
  try {
    const res = await axios({
      url,
      method: "put",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    if (res.status !== API_SUCCESS) {
      return { isSuccess: false, errorMessage: "서버에서 에러가 났습니다. 다시 시도해주세요." };
    }
    return { isSuccess: true, Message: "동아리를 생성하였습니다!" };
  } catch ({ response }) {
    const { status, message: errorMessage } = response.data;
    if (status === BAD_REQUEST) {
      if (errorMessage === "INVALID_CLUB_DESCRIPTION") {
        return { isSuccess: false, errorMessage: "다시 입력해 주세요" };
      }
      if (errorMessage === "NOT_EXIST_CLUB") {
        return { isSuccess: false, errorMessage: "존재하지 않은 클럽입니다." };
      }
    }
  }
}
