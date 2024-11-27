import './user-layout.css';
import { useNavigate } from 'react-router-dom';
const UserLayout = ({ children }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };
  return (
    <>
      <div className="user-layout">
        <div className="name">User Dashboard</div>
        <div className="logout">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};
export default UserLayout;
