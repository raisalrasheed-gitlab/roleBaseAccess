import AdminLayout from '../../../components/Admin-Layout/admin-layout';
import { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import './role.css';
const Role = () => {
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
  ];
  return (
    <>
      <AdminLayout heading="Role">
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
