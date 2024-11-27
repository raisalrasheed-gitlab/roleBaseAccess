import AdminLayout from '../../../components/Admin-Layout/admin-layout';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../../components/CustomInput/custom-input';
import './add-role.css';
import { useState } from 'react';
import axios from '../../../utils/axios';
const AddRole = () => {
  const [role, setRole] = useState({ permission: [] });
  const [per, setPer] = useState([]);
  const navigate = useNavigate();
  const onChange = (e, key) => {
    if ([key] == 'permission') {
      setPer(per => [...per, e.target.value]);
      setRole({ ...role, [key]: per });
    } else {
      setRole({ ...role, [key]: e.target.value });
    }
  };
  console.log(role);
  const onSubmit = async () => {
    const dbResponse = await axios.post('http://localhost:9000/roles', role);
    console.log(dbResponse);
  };
  return (
    <>
      <AdminLayout heading="Add Role Page">
        <div className="back">
          <button
            onClick={() => {
              navigate('/admin/role');
            }}
          >
            Back
          </button>
        </div>
        <div className="admin-add-role">
          <div>
            <CustomInput
              label="Name:"
              onChange={e => {
                onChange(e, 'name');
              }}
            ></CustomInput>
          </div>
          <div className="permission">
            <label>Permission:</label>
            <div>
              <input
                className="input"
                type="checkbox"
                value="Read"
                onChange={e => onChange(e, 'permission')}
              ></input>
              <h5>Read</h5>
            </div>
            <div>
              <input
                type="checkbox"
                value="Write"
                onChange={e => onChange(e, 'permission')}
              ></input>
              <h5>Write</h5>
            </div>
            <div>
              <input
                type="checkbox"
                value="Delete"
                onChange={e => {
                  onchange(e, 'permission');
                }}
              ></input>
              <h5>Delete</h5>
            </div>
          </div>
          <div className="btn">
            <button onClick={onSubmit}>Add Role</button>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default AddRole;
