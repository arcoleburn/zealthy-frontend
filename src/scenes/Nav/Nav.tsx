import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";
import styles from "./Nav.module.css";
const Nav = () => {
  const { setUser, setIsLoggedIn, isLoggedIn } = useAppContext();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>

      <Link to="/admin">Admin</Link>
      <Link to="/data">Data</Link>

      {isLoggedIn ? (
        <button
          onClick={() => {
            setUser(null);
            setIsLoggedIn(false);
            navigate("/");
          }}
        >
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Nav;
