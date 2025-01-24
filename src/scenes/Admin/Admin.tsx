import { useState } from "react";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";
import { updateModules } from "../../services/modules";


const Admin = () => {
  const { pageOne, pageTwo, setPageOne, setPageTwo } = useAppContext();
  const [pendingPageOne, setPendingPageOne] = useState(pageOne);
  const [pendingPageTwo, setPendingPageTwo] = useState(pageTwo);

  const allModules = ["aboutMe", "birthday", "address"];

  const toggleModule = (module: string, page: 1 | 2) => {
    if (page === 1) {
      if (pendingPageOne.includes(module)) {
        setPendingPageOne(pendingPageOne.filter((item) => item !== module));
      } else {
        setPendingPageOne([...pendingPageOne, module]);
        if (pendingPageTwo.includes(module)) {
          setPendingPageTwo(pendingPageTwo.filter((item) => item !== module));
        }
      }
    } else {
      if (pendingPageTwo.includes(module)) {
        setPendingPageTwo(pendingPageTwo.filter((item) => item !== module));
      } else {
        setPendingPageTwo([...pendingPageTwo, module]);
        if (pendingPageOne.includes(module)) {
          setPendingPageOne(pendingPageOne.filter((item) => item !== module));
        }
      }
    }
  };

  const handleSave = () => {
    if (pendingPageOne.length > 0 && pendingPageTwo.length > 0) {
      const body = {
        one: pendingPageOne,
        two: pendingPageTwo,
      };
      updateModules(body);
      setPageOne(pendingPageOne);
      setPageTwo(pendingPageTwo);
    } else {
      window.alert("each page must have a module!");
    }
  };

  return (
    <>
      <div className="p-6 space-y-6 text-left capitalize">
        {/* Page 1 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Page 1</h2>
          {allModules.map((module) => (
            <div key={module} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={pendingPageOne.includes(module)}
                onChange={() => toggleModule(module, 1)}
                className="w-5 h-5"
              />
              <label className="text-white ">{module}</label>
            </div>
          ))}
        </div>

        {/* Page 2 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Page 2</h2>
          {allModules.map((module) => (
            <div key={module} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={pendingPageTwo.includes(module)}
                onChange={() => toggleModule(module, 2)}
                className="w-5 h-5"
              />
              <label className="text-white">{module}</label>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Save Page Config
          </button>
        </div>
      </div>
    </>
  );
};
export default Admin;
