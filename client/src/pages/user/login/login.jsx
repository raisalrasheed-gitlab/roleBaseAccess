import { useState } from 'react';
import CustomInput from '../../../components/CustomInput/custom-input';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';

const Login = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(0);
  const [user, setUser] = useState({ email: '', password: '' });
  const onChange = (e, key) => {
    setUser({ ...user, [key]: e.target.value });
    setCheck(0);
  };
  console.log(user);
  const onSubmit = async () => {
    try {
      const dbResponse = await axios.post('/user/login', user);
      console.log(dbResponse.data);
      if (dbResponse && dbResponse.data && dbResponse.data.token) {
        localStorage.setItem('token', dbResponse.data.token);
        localStorage.setItem('id', dbResponse.data.id);
        navigate(`/user/home/${localStorage.getItem('id')}`);
      }
    } catch (error) {
      setCheck(1);
    }
  };
  return (
    <>
      <div className="user-login">
        <h3>User login</h3>
        {check ? (
          <p style={{ color: 'red', fontSize: '20px' }}>
            "Email or Password incorrect !!! or Deactivated"
          </p>
        ) : (
          ''
        )}
        <CustomInput
          label="Email"
          onChange={e => onChange(e, 'email')}
        ></CustomInput>
        <CustomInput
          label="Password"
          type="password"
          onChange={e => {
            onChange(e, 'password');
          }}
        ></CustomInput>
        <button className="submit" onClick={onSubmit}>
          Submit
        </button>
        <button
          className="admin"
          onClick={() => {
            navigate('/');
          }}
        >
          Go to Admin
        </button>
      </div>
    </>
  );
};
export default Login;
