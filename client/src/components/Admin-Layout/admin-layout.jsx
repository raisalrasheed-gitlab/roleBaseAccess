import './admin-layout.css';
import { useNavigate, NavLink } from 'react-router-dom';

const AdminLayout = ({ children, heading }) => {
  const navigate = useNavigate();
  const side = document.getElementById('side');
  console.log(side);
  const sideBar = () => {
    side.cla.toggle('show');
  };
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <div className="container">
        <div className="nav-bar">
          <div className="img">
            <div>
              Admin Control
              <button className="show" onClick={sideBar}></button>
            </div>
          </div>
          <div className="logout">
            <button onClick={logout}>Logout</button>
          </div>
        </div>
        <div className="sidebar" id="side">
          <div className="bar">
            <NavLink className="p" to="/admin/user">
              <div className="link"> Users </div>
            </NavLink>

            <NavLink className="p" to="/admin/role">
              <div> Role</div>
            </NavLink>
            <NavLink className="p" to="/admin/profile">
              <div className="link"> Profile</div>
            </NavLink>
          </div>
        </div>
        <div className="main">
          <h2>{heading}</h2>
          {children}
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
