export const verifyName = (_, value) => {
  value = value.trim();
  const logic = /^[가-힣]{2,10}$/;
  if (value.length < 2 || value.length > 20) {
    return Promise.reject(new Error("2자에서 10자 사이로 입력해야합니다."));
  }
  if (!logic.test(value)) {
    return Promise.reject(new Error("한글만 입력가능합니다."));
  }
  return Promise.resolve();
};

export const verifyNickname = (_, value) => {
  value = value.trim();
  const atLeastOneSpecialLetter = /[`~!@#$%^&*|\\\\'\\";:\\/?]/gi;
  const logic = /^[a-zA-Z가-힣0-9]{2,20}$/;
  if (atLeastOneSpecialLetter.test(value)) {
    return Promise.reject(new Error("특수문자는 사용할 수 없습니다."));
  }
  if (value.length < 2 || value.length > 20) {
    return Promise.reject(new Error("2자에서 10자 사이로 입력해야합니다."));
  }
  if (!logic.test(value)) {
    return Promise.reject(new Error("올바른 닉네임이 아닙니다."));
  }
  return Promise.resolve();
};

export const verifyEmail = (_, value) => {
  value = value.trim();
  const logic = /^[_a-zA-Z0-9-\\+]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/;
  if (!logic.test(value)) {
    return Promise.reject(new Error("이메일 양식이 올바르지 않습니다."));
  }
  return Promise.resolve();
};

export const verifyPassword = (_, value) => {
  value = value.trim();
  const atLeastOneUppercase = /[A-Z]/;
  const atLeastOneLowercase = /[a-z]/;
  const atLeastOneSpecialLetter = /[`~!@#$%^&*|\\\\'\\";:\\/?]/gi;
  const atLeastOneNumber = /[0-9]/;
  if (!atLeastOneUppercase.test(value)) {
    return Promise.reject(new Error("대문자는 적어도 하나이상 들어가야 합니다."));
  }
  if (!atLeastOneLowercase.test(value)) {
    return Promise.reject(new Error("소문자는 적어도 하나이상 들어가야 합니다."));
  }
  if (!atLeastOneSpecialLetter.test(value)) {
    return Promise.reject(new Error("특수문자는 반드시 하나이상 들어가야합니다."));
  }
  if (!atLeastOneNumber.test(value)) {
    return Promise.reject(new Error("숫자는 반드시 하나이상 들어가야합니다."));
  }
  if (value.length < 8 || value.length > 30) {
    return Promise.reject(new Error("8자에서 30자 사이로 입력해야합니다."));
  }
  return Promise.resolve();
};

export const verityPhoneNumber = (_, value) => {
  value = value.trim();
  const logic = /^010[0-9]{8}$/;
  if (!logic.test(value)) {
    return Promise.reject(new Error("올바른 전화번호 양식이 아닙니다."));
  }
  return Promise.resolve();
};
