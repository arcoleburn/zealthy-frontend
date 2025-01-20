import { useNavigate } from "react-router-dom";
import AboutMe from "../../scenes/AboutMe";
import Address from "../../scenes/Address";
import Birthday from "../../scenes/Birthday";
import { updateUserinDB } from "../../services/users";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";

const PageTwo = () => {
  const { pageTwo, user, isNewUser, setIsNewUser } = useAppContext();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log(isNewUser);
    updateUserinDB(user?.userId as string, user, isNewUser).then(() =>
      setIsNewUser(false)
    );
  };
  return (
    <div>
      {pageTwo.includes("aboutMe") && <AboutMe />}
      {pageTwo.includes("birthday") && <Birthday />}
      {pageTwo.includes("address") && <Address />}
      <button onClick={() => navigate("/")}>Go Back</button>
      <button onClick={handleSave}>Save Changes</button>
      <p> Page 2 of 2</p>
    </div>
  );
};

export default PageTwo;
