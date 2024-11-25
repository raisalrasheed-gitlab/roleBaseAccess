import AdminProfile from './pages/admin/profile/profile';
import AdminRole from './pages/admin/role/role';
import AdminUser from './pages/admin/user/user';
import AdminAddUser from './pages/admin/add-user/adduser';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminProfile></AdminProfile>}></Route>
        <Route path="/admin/role" element={<AdminRole />}></Route>
        <Route path="/admin/user" element={<AdminUser />}></Route>
        <Route path="/admin/user/add" element={<AdminAddUser />}></Route>
      </Routes>
    </>
  );
};
export default App;
