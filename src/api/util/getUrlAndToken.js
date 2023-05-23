import { API_HOST } from "../../common/constant";
import { getLocalStorageItem } from "../../common/util/usingLocalStorage";

export const getUrlAndToken = (url, tokenKey) => {
  url = API_HOST + url;
  const token = getLocalStorageItem(tokenKey);
  return [url, token];
};
