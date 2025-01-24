import { FC } from "react";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";

const AboutMe: FC = () => {
  const { user, updateUser } = useAppContext();

  const handleChange = (val: string) => {
    updateUser({ aboutMe: val });
  };

  return (
    <div className="space-y-4">
    <label htmlFor="aboutMe" className="block text-left text-lg font-semibold">About Me</label>
    <textarea
      id="aboutMe"
      placeholder="Tell us about yourself..."
      value={user?.aboutMe}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none min-h-[150px]"
    />
  </div>
  );
};

export default AboutMe;
