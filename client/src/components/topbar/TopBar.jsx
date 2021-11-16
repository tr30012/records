import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import api, {API_URL} from "../../http/http"
import axios from "axios";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    const logout = async () => {
      const res = await axios.post(`${API_URL}auth/logout`, {withCredentials: true});

      if (res.status === 200) {
          localStorage.removeItem('token');
          console.log("logout");
      }
    }
    logout();
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft"/>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              {user && "WRITE"}
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {user.username}
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
