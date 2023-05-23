import axios from "axios";
import { API_SUCCESS, SERVER_ERROR } from "../constant";
import { getUrlAndToken } from "../util/getUrlAndToken";

const showClubResumeApi = async ({ url }) => {
  let token = null;
  [url, token] = getUrlAndToken(url, "x-auth");
  try {
    const result = await axios({
      url,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (result.status !== API_SUCCESS) {
      return { isSuccess: false, message: "서버에서 에러가 났습니다. 새로 고침 후 다시 시도해 주세요" };
    }
    return { isSuccess: true, data: result.data.data };
  } catch ({ response }) {
    const status = response.status;
    let message = response.data ? response.data.message : response.message;
    if (status === SERVER_ERROR) {
      return { isSuccess: false, message: "서버에서 에러가 났습니다. 다시 시도해주세요." };
    }
    return { isSuccess: false, message };
  }
};
export default showClubResumeApi;
