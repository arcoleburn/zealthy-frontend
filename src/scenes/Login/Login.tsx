import { FC, useState } from "react";
import styles from "./Login.module.css";
import {
  Address,
  useAppContext,
} from "../../shared/AppContext/AppContextProvider";
import { loginOrRegister } from "../../services/users";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [emailInput, setEmailInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  const { setIsLoggedIn, setUser, setIsNewUser } = useAppContext();
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
  };

  return (
    <div className={styles.container}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={pwInput}
        onChange={(e) => setPwInput(e.target.value)}
        required
      />
      <button disabled={!emailInput || !pwInput} onClick={handleSubmit}>
        Login / Register
      </button>
    </div>
  );
};

export default Login;
