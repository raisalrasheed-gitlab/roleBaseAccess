import TextArea from 'antd/es/input/TextArea';
import AdminLayout from '../../../components/Admin-Layout/admin-layout';
import CustomInput from '../../../components/CustomInput/custom-input';
import './adduser.css';
import { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AddUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [roleid, setRole] = useState();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    role: '',
    active: true,
  });

  useEffect(() => {
    getRoleId();
    if (id) {
      getUser();
    }
  }, []);
  const getRoleId = async () => {
    const role = await axios.get('http://localhost:9000/roles');
    setRole(role.data);
  };
  const getUser = async (req, res) => {
    const user = await axios.get(`http://localhost:9000/user/${id}`);
    console.log(user.data);
    setUser({
      name: user.data[0].name,
      address: user.data[0].address,
      email: user.data[0].email,
      password: user.data[0].password,
      role: user.data[0].role._id,
    });
  };
  console.log(user.name);
  const onChange = (e, key) => {
    setUser({ ...user, [key]: e.target.value });
  };
  const onSubmit = async () => {
    console.log('adding');
    const dbResponse = await axios.post('http://localhost:9000/user', user);
    console.log(dbResponse);
    navigate('/admin/user');
  };
  const onEdit = async () => {
    const dbResponse = await axios.patch(`/user/${id}`, user);
    navigate('/admin/user');
  };
  return (
    <>
      <AdminLayout heading={id ? 'Edit user page' : 'Add user page'}>
        <div className="back">
          <button
            onClick={() => {
              navigate('/admin/user');
            }}
          >
            Back
          </button>
        </div>
        <div className="admin-add">
          <div className="name">
            <CustomInput
              label="Name:"
              onChange={e => onChange(e, 'name')}
              value={id ? user.name : user.name}
            ></CustomInput>
          </div>
          <div>
            <label>Address</label>
            <TextArea
              value={id ? user.address : user.address}
              style={{ borderColor: 'orange', marginTop: '15px' }}
              onChange={e => {
                onChange(e, 'address');
              }}
            ></TextArea>
          </div>
          <div>
            <CustomInput
              value={id ? user.email : user.email}
              label="Email:"
              type="email"
              onChange={e => onChange(e, 'email')}
            ></CustomInput>
          </div>
          {!id ? (
            <div>
              <CustomInput
                label="Password:"
                type="password"
                onChange={e => onChange(e, 'password')}
              ></CustomInput>
            </div>
          ) : (
            ''
          )}
          {!id ? (
            <div>
              <CustomInput
                label="Confirm Password:"
                type="password"
                onChange={e => onChange(e, 'confirmPassword')}
              ></CustomInput>
            </div>
          ) : (
            ''
          )}
          <div>
            <label>Activation</label>
            <select
              className="select"
              style={{ marginTop: '15px' }}
              onChange={e => onChange(e, 'active')}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>

          <div>
            <label>Role</label>
            <select
              onChange={e => onChange(e, 'role')}
              className="select"
              style={{ marginTop: '15px' }}
              value={id ? user.role : ''}
            >
              <option>Select</option>
              {roleid
                ? roleid.map(key => {
                    return <option value={key._id}>{key.name}</option>;
                  })
                : ''}
            </select>
          </div>
          <div>
            <CustomInput label="Image" type="file"></CustomInput>
          </div>
        </div>
        <div className="admin-user-submit">
          <button onClick={id ? onEdit : onSubmit}>
            {id ? 'Edit User' : 'Add User'}
          </button>
        </div>
      </AdminLayout>
    </>
  );
};
export default AddUser;
