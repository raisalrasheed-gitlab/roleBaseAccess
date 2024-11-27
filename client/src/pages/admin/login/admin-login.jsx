import './admin-login.css';
import CustomInput from '../../../components/CustomInput/custom-input';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [adminLog, setAdminLog] = useState({ email: '', password: '' });
  const [check, setCheck] = useState(0);
  const onChange = (e, key) => {
    setAdminLog({ ...adminLog, [key]: e.target.value });
    setCheck(0);
  };
  console.log(adminLog);
  const onLoginBtn = async () => {
    try {
      const dbResponse = await axios.post(
        'http://localhost:9000/admin/login',
        adminLog
      );
      console.log(dbResponse.data.token);
      if (dbResponse && dbResponse.data && dbResponse.data.token) {
        localStorage.setItem('token', dbResponse.data.token);
        navigate('/admin/profile');
      }
    } catch (error) {
      setCheck(1);
    }
  };
  return (
    <>
      <div className="admin-login">
        <h2 style={{ textAlign: 'center' }}>Admin Login Page</h2>
        <div className="top-button">
          {check ? (
            <p style={{ color: 'orange', fontSize: '20px' }}>
              "Email or Password incorrect !!!"
            </p>
          ) : (
            ''
          )}
          <CustomInput
            label="Enter your Email :"
            onChange={e => onChange(e, 'email')}
          ></CustomInput>
          <CustomInput
            label="Enter your Password :"
            type="password"
            onChange={e => {
              onChange(e, 'password');
            }}
          ></CustomInput>
        </div>
        <button onClick={onLoginBtn}>Submit</button>
        <button onClick={() => navigate('/user/login')}>Go to user</button>
      </div>
    </>
  );
};
export default Login;
