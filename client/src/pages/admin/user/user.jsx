import { useEffect, useState } from 'react';
import './user.css';
import AdminLayout from '../../../components/Admin-Layout/admin-layout';
import { Table } from 'antd';
import { Switch } from 'antd';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const user = await axios.get('http://localhost:9000/user');
    setUser(user.data);
  };
  const onActive = async (e, id) => {
    console.log(e, id);
    const dbResponse = await axios.patch(`/user/${id}`, { active: e });
  };
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
      render: role => {
        return role.name;
      },
    },
    {
      title: 'Edit',
      dataIndex: '_id',
      render: id => {
        return (
          <i
            class="fa-solid fa-pen-to-square"
            onClick={() => {
              navigate(`/admin/user/edit/${id}`);
            }}
          ></i>
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
    {
      title: 'Activation',
      dataIndex: 'active',
      render: active => {
        return active ? 'active' : 'disable';
      },
    },
  ];
  const onDelete = async id => {
    console.log(id);
    const dbResponse = await axios.delete(`http://localhost:9000/user/${id}`);
    console.log(dbResponse);
    getUser();
  };

  return (
    <>
      <AdminLayout heading="Users">
        <div className="admin-user-add-btn">
          <button
            onClick={() => {
              navigate('/admin/user/add');
            }}
          >
            AddUsers
          </button>
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
