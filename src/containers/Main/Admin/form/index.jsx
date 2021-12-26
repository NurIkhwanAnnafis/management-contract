import React from 'react';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="62">+62</Option>
    </Select>
  </Form.Item>
);

const FormAdmin = (props) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="adminForm"
      layout='vertical'
      onFinish={props.onFinish}
      // initialValues={}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'E-mail tidak valid!',
          },
          {
            required: true,
            message: 'Tolong masukan email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="name"
        label="Nama"
        rules={[{ required: true, message: 'Tolong masukan nama!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Nomor Telephone"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="address"
        label="Alamat"
        rules={[{ required: true, message: 'Tolong masukan alamat!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Tolong masukan gender!' }]}
      >
        <Select placeholder="pilih gender">
          <Option value="male">Laki-lakki</Option>
          <Option value="female">Perempuan</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormAdmin;