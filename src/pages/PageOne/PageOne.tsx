import { Link } from "react-router-dom";
import AboutMe from "../../scenes/AboutMe";
import Address from "../../scenes/Address";
import Birthday from "../../scenes/Birthday";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";

const PageOne = () => {
  const { pageOne } = useAppContext();

  return (
    <div>
      {pageOne.includes("aboutMe") && <AboutMe />}
      {pageOne.includes("birthday") && <Birthday />}
      {pageOne.includes("address") && <Address />}
      <Link to="/page2">
        <button>Go to Page 2</button>
      </Link>
      <p> Page 1 of 2</p>
    </div>
  );
};

export default PageOne;
