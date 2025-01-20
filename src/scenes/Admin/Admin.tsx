import { useState } from "react";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";
import { updateModules } from "../../services/modules";

import styles from "./Admin.module.css";

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
      <div
        className={styles.admin}      >
        <div>
          <h2>Page 1</h2>
          {allModules.map((module) => (
            <div key={module}>
              <input
                type="checkbox"
                checked={pendingPageOne.includes(module)}
                onChange={() => toggleModule(module, 1)}
              />
            </div>
          ))}
        </div>
        <div>
          <h2>Modules</h2>
          {allModules.map((module) => (
            <div key={module}>
              <label>{module}</label>
            </div>
          ))}
        </div>
        <div>
          <h2>Page 2</h2>
          {allModules.map((module) => (
            <div key={module}>
              <input
                type="checkbox"
                checked={pendingPageTwo.includes(module)}
                onChange={() => toggleModule(module, 2)}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleSave}>Save Page Config</button>
    </>
  );
};

export default Admin;
