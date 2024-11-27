import UserLayout from '../../../components/User-Layout/user-layout';
import { Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const userMain = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  // useEffect(() => {
  //   getUser();
  // }, []);
  const getUser = async () => {
    const user = await axios.get(
      `http://localhost:9000/user/${localStorage.getItem('id')}`
    );
    setUser(user.data);
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
        return;
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
              navigate(``);
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
  ];

  return (
    <>
      <UserLayout>
        <div>
          <Table
            className="admin-user-table"
            dataSource={user}
            columns={columns}
          />
        </div>
      </UserLayout>
    </>
  );
};
export default userMain;
