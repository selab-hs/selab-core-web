import { useDispatch, useSelector } from "react-redux";
import { getLocalStorageItem } from "../../common/util/usingLocalStorage";
import { actions } from "../state";
export default function useIsLogIn() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (isLogin) {
    return true;
  }
  const nickname = getLocalStorageItem("nickname");
  const role = getLocalStorageItem("role");
  if (nickname && role) {
    dispatch(actions.setLogin({ isLogin: true, nickname, role }));
    return true;
  }
  return false;
}
