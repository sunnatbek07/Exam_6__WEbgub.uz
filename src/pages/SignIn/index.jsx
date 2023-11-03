import React, { useEffect } from 'react';
import logo from "../../assets/images/logo.svg";
import './style.scss';
import { Button, Checkbox, Form, Input, message } from 'antd';
import userApi from '../../service/user';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Muvaffaqiyatli ro\'yhatdan o\'tdingiz!',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Xatolik!',
    });
  };

  useEffect(() => {
    userApi.getMe().then((res) => {
      localStorage.setItem("user", res.data.admin.fullName);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const onFinish = (values) => {
    console.log('Success:', values);
    userApi.login(values).then((response) => {
      localStorage.setItem('token', response.data.token);
      success()
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000)
    }).catch((err) => {
      const error = () => {
        messageApi.open({
          type: 'error',
          content: `${err.response.data.message}`,
        });
      };
      error()
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className='signIn_wrapper'>
      <div className='signIn_container shadow-lg'>
        <Link to='/' className='signIn_header'>
          {contextHolder}
          <img src={logo} className='logo' alt="Logo" />
          <p>Ebgub.uz</p>
        </Link>

        <div className='form'>
          <Form
            name="basic"
            style={{
              maxWidth: '100%',
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Foydalanuvchi nomi"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Iltimos foydalanuvchi nomini kiriting!',
                },
              ]}
            >
              <Input placeholder='Foydalanuvchi nomi...' />
            </Form.Item>

            <Form.Item
              label="Telefon raqam"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Iltimos parolni kiriting!',
                },
              ]}
            >
              <Input.Password placeholder='Parol...' type='text' />
            </Form.Item>

            <Form.Item
              name="see"
            >
              <Checkbox>Parolni ko'rish</Checkbox>
            </Form.Item>
            <Form.Item >
              <Button type="danger" htmlType="submit" onChange={onFinish}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUp