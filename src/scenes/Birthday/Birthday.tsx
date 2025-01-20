import { FC } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";

const Birthday: FC = () => {
  const { user, updateUser } = useAppContext();

  const handleChange = (val: Date) => {
    updateUser({ birthday: val.toDateString() });
    console.log(val.toDateString());
  };

  return (
    <div>
      <label>Birthday</label>
      <DatePicker
        selected={user && new Date(user.birthday)}
        onChange={(date) => handleChange(date as Date)}
      />
    </div>
  );
};

export default Birthday;
