import { useNavigate, NavLink } from "react-router-dom";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";

const Nav = () => {
  const { setUser, setIsLoggedIn, isLoggedIn } = useAppContext();
  const navigate = useNavigate();

  return (
    <nav>
      <div className="flex space-evenly justify-center rounded-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline text-white py-2 px-4"
              : "text-white hover:text-gray-300 py-2 px-4"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive
              ? "underline text-white py-2 px-4"
              : "text-white hover:text-gray-300 py-2 px-4"
          }
        >
          Admin
        </NavLink>

        <NavLink
          to="/data"
          className={({ isActive }) =>
            isActive
              ? "underline text-white py-2 px-4"
              : "text-white hover:text-gray-300 py-2 px-4"
          }
        >
          Data
        </NavLink>

        {isLoggedIn ? (
          <button
            onClick={() => {
              setUser(null);
              setIsLoggedIn(false);
              navigate("/");
            }}
            className="text-white hover:text-gray-300 py-2 px-4"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "underline text-white py-2 px-4"
                : "text-white hover:text-gray-300 py-2 px-4"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
