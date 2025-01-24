import { FC } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";

const Birthday: FC = () => {
  const { user, updateUser } = useAppContext();

  const handleChange = (val: Date) => {
    updateUser({ birthday: val.toDateString() });
  };

  return (
    <div className="space-y-4">
    <label className="block text-left text-lg font-semibold">Birthday</label>
    <DatePicker
      selected={(user?.birthday && new Date(user.birthday)) || new Date('8/10/1994')}
      onChange={(date) => handleChange(date as Date)}
      className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
  
  );
};

export default Birthday;
