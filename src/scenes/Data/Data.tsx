import { useEffect, useState } from "react";
import { getAllUserData } from "../../services/users";

const Data = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    const cachedData = localStorage.getItem("userData");
    if (cachedData) {
      setData(JSON.parse(cachedData));
    }
    const fetchedData = await getAllUserData();

    if (JSON.stringify(fetchedData) !== JSON.stringify(data)) {
      setData(fetchedData);
      localStorage.setItem("userData", JSON.stringify(fetchedData));
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  //TODO: type this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const generateTable = (data: any[]) => {
    if (data.length === 0) {
      return <p>No data available</p>;
    }

    const headers = [
      "UserId",
      "Email",
      "About Me",
      "Birthday",
      "Address 1",
      "Address 2",
      "City",
      "State",
      "Zipcode",
    ];

    const rows = data.map((user, index) => (
      <tr key={index}>
        <td className="px-4 py-2 border w-15 ">{user.userId}</td>
        <td className="px-4 py-2 border max-w-50 truncate">{user.email || ""}</td>
        <td className="px-4 py-2 border max-w-xs truncate">{user.aboutMe || ""}</td>
        <td className="px-4 py-2 border w-32 truncate">
          {user.birthday || ""}
        </td>
        <td className="px-4 py-2 border w-64 truncate">
          {user.address1 || ""}
        </td>
        <td className="px-4 py-2 border w-64 truncate">
          {user.address2 || ""}
        </td>
        <td className="px-4 py-2 border w-40 truncate">{user.city || ""}</td>
        <td className="px-4 py-2 border w-32 truncate">{user.state || ""}</td>
        <td className="px-4 py-2 border w-32 truncate">{user.zipcode || ""}</td>
      </tr>
    ));

    return (
      <div className=" w-full overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-2 text-left border">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  };

  return <div className="p-4">{generateTable(data)}</div>;
};

export default Data;
