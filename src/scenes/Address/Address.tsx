import { FC } from "react";
import { useAppContext } from "../../shared/AppContext/AppContextProvider";

const Address: FC = () => {
  const { user, updateUser } = useAppContext();

  const handleChange = (field: string, val: string) => {
    updateUser({
      address: {
        ...user?.address,
        [field]: val,
      },
    });
  };

  return (
    <>
      <div>
        <label>Address 1</label>
        <input
          type="text"
          name="address1"
          value={user?.address.address1}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

      <div>
        <label>Address 2</label>
        <input
          type="text"
          name="address2"
          value={user?.address.address2}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={user?.address.city}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

      <div>
        <label>State</label>
        <input
          type="text"
          name="state"
          value={user?.address.state}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

      <div>
        <label>Zipcode</label>
        <input
          type="text"
          name="zipcode"
          value={user?.address.zipcode}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
    </>
  );
};

export default Address;
