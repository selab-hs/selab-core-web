import axios from "axios";
import { API_SUCCESS } from "../constant";
import { getUrlAndToken } from "../util/getUrlAndToken";

async function getClubIntroApi({ url }) {
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
      return { isSuccess: false, errorMessage: "서버에서 에러가 났습니다. 새로 고침 후 다시 시도해 주세요" };
    }
    return { isSuccess: true, thumbnailData: result.data.data };
  } catch ({ response }) {
    return { isSuccess: false, errorMessage: "새로고침 후 다시 시도해주세요" };
  }
}
export default getClubIntroApi;
