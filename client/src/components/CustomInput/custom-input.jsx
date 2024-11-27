import { Input } from 'antd';
import './custom-input.css';
const CustomInput = ({ label, type = 'text', onChange, value }) => {
  return (
    <>
      <label>{label}</label>
      <Input
        className="custom-input"
        type={type}
        onChange={onChange}
        value={value}
      ></Input>
    </>
  );
};
export default CustomInput;
