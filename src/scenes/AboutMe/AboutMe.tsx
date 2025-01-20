import { FC } from "react";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";
// import styles from "./AboutMe.module.css";

const AboutMe: FC = () => {
  const { user, updateUser } = useAppContext();

  const handleChange = (val: string) => {
    updateUser({ aboutMe: val });
  };

  return (
    <div>
      <label htmlFor="aboutMe">About Me</label>
      <textarea
        id="aboutMe"
        placeholder="Tell us about yourself..."
        value={user?.aboutMe}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default AboutMe;
