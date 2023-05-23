import { createReducer } from "../../common/redux-helper";

export const Types = {
  FetchSignup: "auth/FetchSignup",
  FetchLogin: "auth/FetchLogin",
  SetSignup: "auth/SetSignup",
  SetLogin: "auth/SetLogin",
  SetLogout: "auth/SetLogout",
};

export const actions = {
  fetchSignup: ({ name, nickname, email, password, phoneNumber }) => ({
    type: Types.FetchSignup,
    name,
    nickname,
    email,
    password,
    phoneNumber,
  }),
  fetchLogin: ({ email, password }) => ({
    type: Types.FetchLogin,
    email,
    password,
  }),
  setSignup: (isSignup) => ({
    type: Types.SetSignup,
    isSignup,
  }),
  setLogin: ({ isLogin, nickname, role, clubName }) => ({
    type: Types.SetLogin,
    isLogin,
    nickname,
    role,
    clubName,
  }),
  setLogout: () => ({
    type: Types.SetLogout,
  }),
};
const INITIAL_STATE = { isLogin: false, isSignUp: false, nickname: null, role: null, clubName: null };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetSignup]: (state, action) => {
    state.isSignUp = action.isSignup;
  },
  [Types.SetLogin]: (state, { isLogin, nickname, role, clubName }) => {
    state.isLogin = isLogin;
    state.nickname = nickname;
    state.role = role;
    state.clubName = clubName;
  },
  [Types.SetLogout]: (state, _) => {
    state.isLogin = false;
    state.nickname = null;
    state.role = null;
    state.clubName = null;
  },
});
export default reducer;
