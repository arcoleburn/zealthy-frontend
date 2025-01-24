import { Link } from "react-router-dom";
import AboutMe from "../../scenes/AboutMe";
import Address from "../../scenes/Address";
import Birthday from "../../scenes/Birthday";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";

const PageOne = () => {
  const { pageOne } = useAppContext();

  return (
    <div className="space-y-6">
    {pageOne.includes("aboutMe") && <AboutMe />}
    {pageOne.includes("birthday") && <Birthday />}
    {pageOne.includes("address") && <Address />}
  
    <div className="flex justify-between items-center mt-6">
      <Link to="/page2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Go to Page 2
        </button>
      </Link>
      <p className="text-gray-500">Page 1 of 2</p>
    </div>
  </div>
  
  
  );
};

export default PageOne;
