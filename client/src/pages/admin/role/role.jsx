import AdminLayout from '../../../components/Admin-Layout/admin-layout';
import { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from '../../../utils/axios';
import './role.css';
import { useNavigate } from 'react-router-dom';
const Role = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState();
  useEffect(() => {
    getRole();
  }, []);
  const getRole = async () => {
    const role = await axios.get('http://localhost:9000/roles');
    setRole(role.data);
  };
  console.log(role);
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Permmission',
      dataIndex: 'permission',
      key: 'permission',
      render: id => {
        return (
          <>
            <div>
              {id[0]}, {id[1]}, {id[2]}
            </div>
          </>
        );
      },
    },
    {
      title: 'Delete',
      dataIndex: '_id',
      render: id => {
        return (
          <i
            class="fa-solid fa-trash"
            onClick={() => {
              onDelete(id);
            }}
          ></i>
        );
      },
    },
  ];
  const onDelete = async id => {
    console.log(id);
    const dbResponse = await axios.delete(`http://localhost:9000/roles/${id}`);
    console.log(dbResponse.data);
    getRole();
  };
  return (
    <>
      <AdminLayout heading="Role">
        <div className="admin-role-add-btn">
          <button
            onClick={() => {
              navigate('/admin/role/add');
            }}
          >
            AddRole
          </button>
        </div>
        <Table
          className="admin-role-table"
          dataSource={role}
          columns={columns}
        />
      </AdminLayout>
    </>
  );
};
export default Role;
