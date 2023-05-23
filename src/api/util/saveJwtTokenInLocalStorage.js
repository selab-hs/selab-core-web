import { setLocalStorageItem } from "../../common/util/usingLocalStorage";

export const saveJwtTokenInLocalStorage = (token) => {
  setLocalStorageItem("x-auth", token);
};
