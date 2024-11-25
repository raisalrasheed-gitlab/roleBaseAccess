import { useEffect, useState } from 'react';
import './user.css';
import AdminLayout from '../../../components/Admin-Layout/admin-layout';
import { Table } from 'antd';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const user = await axios.get('http://localhost:9000/user');
    setUser(user.data);
  };
  console.log(user);
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
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'roles_details',
      key: 'roles_details',
      render: id => {
        return id.name;
      },
    },
  ];

  return (
    <>
      <AdminLayout heading="Users">
        <div className="admin-user-add-btn">
          <button>AddUsers</button>
        </div>
        <Table
          className="admin-user-table"
          dataSource={user}
          columns={columns}
        />
      </AdminLayout>
    </>
  );
};
export default User;
