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
    <div className="space-y-4 text-white">
      <div>
        <label className="block text-lg font-semibold text-left">Address 1</label>
        <input
          type="text"
          name="address1"
          value={user?.address.address1}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-left">Address 2</label>
        <input
          type="text"
          name="address2"
          value={user?.address.address2}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-left">City</label>
        <input
          type="text"
          name="city"
          value={user?.address.city}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-left">State</label>
        <input
          type="text"
          name="state"
          value={user?.address.state}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-left">Zipcode</label>
        <input
          type="text"
          name="zipcode"
          value={user?.address.zipcode}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Address;
