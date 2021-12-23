import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom'

const index = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate(`/admin`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="row justify-content-center align-items-center h-100">
      <div className='col-md-5 col-12' style={{ background: '#D3E4CD', borderRadius: 10 }}>
        <h1 className="font-weight-bold mb-5 text-center">
          Login
        </h1>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className='text-center'>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default index
