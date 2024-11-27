import AdminProfile from './pages/admin/profile/profile';
import AdminLogin from './pages/admin/login/admin-login';
import AdminRole from './pages/admin/role/role';
import AdminUser from './pages/admin/user/user';
import AdminAddUser from './pages/admin/add-user/adduser';
import AdminAddRole from './pages/admin/add-role/add-role';
import AdminEditUser from './pages/admin/add-user/adduser';
import UserMain from './pages/user/usermain/user-main';
import { Routes, Route } from 'react-router-dom';
import AdminPrivateRoute from './components/PrivateRoutes/admin';
import UserPrivateRoute from './components/PrivateRoutes/user';

import UserLogin from './pages/user/login/login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/admin" element={<AdminPrivateRoute />}>
          <Route
            path="/admin/profile"
            element={<AdminProfile></AdminProfile>}
          ></Route>
          <Route path="/admin/role" element={<AdminRole />}></Route>
          <Route path="/admin/user" element={<AdminUser />}></Route>
          <Route path="/admin/user/add" element={<AdminAddUser />}></Route>
          <Route
            path="/admin/role/add"
            element={<AdminAddRole></AdminAddRole>}
          ></Route>
          <Route
            path="/admin/user/edit/:id"
            element={<AdminEditUser></AdminEditUser>}
          ></Route>
        </Route>
        <Route path="/user/login" element={<UserLogin></UserLogin>}></Route>
        <Route path="/user" element={<UserPrivateRoute />}>
          <Route path="/user/home/:id" element={<UserMain></UserMain>}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
