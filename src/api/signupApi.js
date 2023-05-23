import axios from "axios";
import { message } from "antd";
import { API_SUCCESS, BAD_REQUEST, SERVER_ERROR } from "./constant";
import { API_HOST } from "../common/constant";

export async function signupApi({ url, data, params = {} }) {
  url = API_HOST + url;
  try {
    const res = await axios({ url, method: "post", params, data });
    if (res.status !== API_SUCCESS) {
      message.error("서버에서 에러가 났습니다. 다시 시도해주세요.");
    }
    message.success("회원가입에 성공하였습니다!");
    return { isSuccess: true };
  } catch ({ response }) {
    const status = response.status;
    let errorMessage = response.message ? response.message : response.data.message;
    if (status === SERVER_ERROR) {
      message.error("서버에서 에러가 났습니다. 다시 시도해주세요.");
    }
    if (status === BAD_REQUEST) {
      if (errorMessage === "INVALID_MEMBER_NAME") {
        message.error("유효하지 않은 이름입니다. 다시 회원가입해주세요.");
      } else if (errorMessage === "INVALID_MEMBER_EMAIL") {
        message.error("유효하지 않은 이메일입니다. 다시 회원가입해주세요.");
      } else if (errorMessage === "INVALID_MEMBER_NICKNAME") {
        message.error("유효하지 않은 닉네임입니다. 다시 회원가입해주세요.");
      } else if (errorMessage === "INVALID_MEMBER_PHONE_NUMBER") {
        message.error("유효하지 않은 휴대폰번호입니다. 다시 회원가입해주세요.");
      } else if (errorMessage === "INVALID_MEMBER_PASSWORD") {
        message.error("유효하지 않은 비밀번호입니다. 다시 회원가입해주세요.");
      } else if (errorMessage === "DUPLICATION_MEMBER_EMAIL") {
        message.error("이메일이 중복되었습니다. 다시 회원가입해주세요.");
      } else if (errorMessage === "DUPLICATION_MEMBER_NICKNAME") {
        message.error("닉네임이 중복되었습니다. 다시 회원가입해주세요.");
      } else if (errorMessage === "DUPLICATION_MEMBER_PHONE_NUMBER") {
        message.error("전화번호가 중복되었습니다. 다시 회원가입해주세요.");
      }
    }
    return { isSuccess: false };
  }
}
