import { FC, useState } from "react";
import {
  Address,
  useAppContext,
} from "../../shared/AppContext/AppContextProvider";
import { loginOrRegister } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../shared/ToastContext/ToastContext";

const Login: FC = () => {
  const [emailInput, setEmailInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  const { setIsLoggedIn, setUser, setIsNewUser } = useAppContext();
  const { addToast } = useToast();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractAddress = (userData: { [key: string]: any }): [Address, any] => {
    const { address1, address2, city, state, zipcode, ...user } = userData;
    return [
      {
        address1,
        address2,
        city,
        state,
        zipcode,
      },
      user,
    ];
  };
  const handleSubmit = async () => {
    const res = await loginOrRegister({ email: emailInput, pw: pwInput });
    if (res.userId) {
      setIsLoggedIn(true);
      const [address, user] = extractAddress(res);
      setUser({ ...user, address });
      if (res.newUser) {
        setIsNewUser(true);
      }
      navigate("/");
    }
    if (res.status === 401) {
      addToast("Incorrect Password", "error");
    }
    if (res.status === 500) {
      addToast("Server Error, try again later", "error");
    }
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg w-full max-w-md mx-auto text-left">
      <label htmlFor="email" className="block text-gray-700 mb-2">
        Email
      </label>
      <input
        type="text"
        id="email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
      />

      <label htmlFor="password" className="block text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={pwInput}
        onChange={(e) => setPwInput(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
      />

      <button
        onClick={handleSubmit}
        disabled={!emailInput || !pwInput}
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Login / Register
      </button>
    </div>
  );
};

export default Login;
