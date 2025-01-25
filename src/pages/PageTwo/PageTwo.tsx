import { useNavigate } from "react-router-dom";
import AboutMe from "../../scenes/AboutMe";
import Address from "../../scenes/Address";
import Birthday from "../../scenes/Birthday";
import { updateUserinDB } from "../../services/users";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";
import { useToast } from "../../shared/ToastContext/ToastContext";

const PageTwo = () => {
  const { pageTwo, user, isNewUser, setIsNewUser } = useAppContext();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const handleSave = async () => {
    const address = user?.address;

    if (
      address?.address1 ||
      address?.city ||
      address?.state ||
      address?.zipcode
    ) {
      addToast("Misisng Address Details", "error");
      return;
    }
    const updated = await updateUserinDB(
      user?.userId as string,
      user,
      isNewUser
    );

    if (updated.ok) {
      addToast("User Data Saved", "success");
    } else {
      addToast(updated, "error");
    }

    setIsNewUser(false);
  };
  return (
    <div className="space-y-6">
      {pageTwo.includes("aboutMe") && <AboutMe />}
      {pageTwo.includes("birthday") && <Birthday />}
      {pageTwo.includes("address") && <Address />}

      <div className="flex justify-between mt-4">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
        >
          Go Back
        </button>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
        >
          Save Changes
        </button>
      </div>

      <p className="text-center text-white mt-4">Page 2 of 2</p>
    </div>
  );
};

export default PageTwo;
