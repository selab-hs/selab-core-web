import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actions } from "../state";

export default function useBlockSignup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.isSignUp);
  useEffect(() => {
    if (status) {
      history.replace("/login");
      dispatch(actions.setSignup(false));
    }
  }, [status, history, dispatch]);
}
