import axios from "axios";
import { API_SUCCESS, BAD_REQUEST } from "../constant";
import { getUrlAndToken } from "../util/getUrlAndToken";

export async function createClubApi({ url, data, params = {} }) {
  let token = null;
  [url, token] = getUrlAndToken(url, "x-auth");
  try {
    const res = await axios({
      url,
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
      data,
    });
    if (res.status !== API_SUCCESS) {
      return { isSuccess: false, errorMessage: "서버에서 에러가 났습니다. 다시 시도해주세요." };
    }
    return { isSuccess: true, Message: "동아리를 생성하였습니다!" };
  } catch ({ response }) {
    const { status, message: errorMessage } = response.data;
    if (status === BAD_REQUEST) {
      if (errorMessage === "DUPLICATION_CLUB_NAME") {
        return { isSuccess: false, errorMessage: "중복된 동아리 이름입니다!" };
      }
      if (errorMessage === "INVALID_MEMBER_NAME") {
        return { isSuccess: false, errorMessage: "1글자에서 50글자까지만 입력 가능합니다!" };
      }
    }
  }
}
