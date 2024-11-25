import './admin-layout.css';
import { NavLink } from 'react-router-dom';

const AdminLayout = ({ children, heading }) => {
  const side = document.getElementById('side');
  console.log(side);
  const sideBar = () => {
    side.cla.toggle('show');
  };

  return (
    <>
      <div className="container">
        <div className="nav-bar">
          <div className="img">
            <img src="10007857.png"></img>
            <div>
              Admin Control
              <button className="show" onClick={sideBar}></button>
            </div>
          </div>
          <div className="logout">
            <button>Logout</button>
          </div>
        </div>
        <div className="sidebar" id="side">
          <div className="bar">
            <div className="link">
              <NavLink className="p" to="/admin">
                DashBoard
              </NavLink>
            </div>
            <div className="link">
              <NavLink className="p" to="/admin">
                Admin
              </NavLink>
            </div>

            <NavLink className="p" to="/admin/user">
              <div className="link"> Users </div>
            </NavLink>

            <NavLink className="p" to="/admin/role">
              <div> Role</div>
            </NavLink>
            <NavLink className="p" to="/admin">
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
