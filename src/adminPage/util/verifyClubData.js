import { message } from "antd";

export const verifyClubData = (clubName, clubBranch, clubImage) => {
  if (clubName.length < 1) {
    message.error("동아리 이름을 입력해 주세요");
    return false;
  }
  if (clubBranch.length < 1) {
    message.error("분과를 선택해 주세요");
    return false;
  }
  if (clubImage.length < 1) {
    message.error("사진을 입력해 주세요");
    return false;
  }
  return true;
};
