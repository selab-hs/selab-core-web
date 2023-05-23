import { Col, Row, Form } from "antd";
import React from "react";

/**
 *
 * @param {object} param
 * @param {() => void} param.onFinish
 * @param {import('react').ReactNode} param.children
 */
export default function AuthFormLayout({ onFinish, children }) {
  return (
    <>
      <Row justify="center">
        <Col>
          <Form labelCol={{ span: 8 }} initialValues={{ remember: true }} style={{ width: 400, marginTop: 100 }} onFinish={onFinish}>
            {children}
          </Form>
        </Col>
      </Row>
    </>
  );
}
