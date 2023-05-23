import axios from "axios";
import { API_SUCCESS, BAD_REQUEST } from "../constant";
import { getUrlAndToken } from "../util/getUrlAndToken";

export async function changeAuthorApi({ url, data, params = {} }) {
  let token = null;
  [url, token] = getUrlAndToken(url, "x-auth");
  try {
    const res = await axios({
      url,
      method: "put",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
      data,
    });
    if (res.status !== API_SUCCESS) {
      return { isSuccess: false, errorMessage: "서버에서 에러가 났습니다. 다시 시도해주세요." };
    }
    return { isSuccess: true, Message: "권한을 변경하였습니다." };
  } catch ({ response }) {
    const { status, message: errorMessage } = response.data;
    if (status === BAD_REQUEST) {
      if (errorMessage === "INVALID_EMAIL") {
        return { isSuccess: false, errorMessage: "이메일이 올바르지 않습니다." };
      }
      if (errorMessage === "INVALID_MEMBER_NAME") {
        return { isSuccess: false, errorMessage: "클럽이름이 올바르지 않습니다." };
      }
    }
  }
}
