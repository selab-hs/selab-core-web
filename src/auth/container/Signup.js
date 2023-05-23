import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AuthFormLayout from "../component/AuthFormLayout";
import useBlockSignup from "../hooks/useBlockSignup";
import { actions } from "../state";
import { verifyEmail, verifyName, verifyNickname, verifyPassword, verityPhoneNumber } from "../util/authVerify";

export default function Signup() {
  useBlockSignup();

  const dispatch = useDispatch();

  const onFinish = ({ name, nickname, email, password, phoneNumber }) => {
    dispatch(actions.fetchSignup({ name, nickname, email, password, phoneNumber }));
  };

  return (
    <AuthFormLayout onFinish={onFinish}>
      <Form.Item label="이름" name="name" rules={[{ validator: verifyName }]}>
        <Input />
      </Form.Item>
      <Form.Item label="닉네임" name="nickname" rules={[{ validator: verifyNickname }]}>
        <Input />
      </Form.Item>
      <Form.Item label="이메일" name="email" rules={[{ validator: verifyEmail }]}>
        <Input type="email" />
      </Form.Item>
      <Form.Item label="비밀번호" name="password" rules={[{ validator: verifyPassword }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="전화번호" name="phoneNumber" rules={[{ validator: verityPhoneNumber }]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 5 }}>
          회원가입하기
        </Button>
        또는 <Link to="/login">로그인하기</Link>
      </Form.Item>
    </AuthFormLayout>
  );
}
