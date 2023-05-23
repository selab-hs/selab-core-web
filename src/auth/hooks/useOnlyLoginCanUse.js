import { useEffect } from "react";
import { useHistory } from "react-router";
import { message } from "antd/lib";
import useIsLogIn from "./useIsLogIn";

export default function useOnlyLoginCanUse() {
  const history = useHistory();
  const isLogIn = useIsLogIn();
  useEffect(() => {
    if (isLogIn) {
      return history.replace("/");
    }
    message.warn("로그인 후 사용하실 수 있습니다.");
    setTimeout(() => {
      history.replace("/login");
    }, 500);
    return;
  }, [isLogIn, history]);
}
