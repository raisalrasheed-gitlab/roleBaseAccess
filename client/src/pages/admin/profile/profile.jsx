import AdminLayout from '../../../components/Admin-Layout/admin-layout';
import { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import './profile.css';
const Profile = () => {
  const [admin, setAdmin] = useState();
  useEffect(() => {
    getAdmin();
  }, []);
  const getAdmin = async () => {
    const admin = await axios.get('http://localhost:9000/admin');
    setAdmin(admin.data[0]);
  };

  return (
    <>
      <AdminLayout heading="Profile">
        <div className="admin-profile">
          <div>
            <h3>Id:{admin ? admin._id : ''}</h3>
          </div>
          <div>
            <h3>Email:{admin ? admin.email : ''}</h3>
          </div>
          <div>
            <h3>Role:{admin ? admin.role : ''}</h3>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default Profile;
