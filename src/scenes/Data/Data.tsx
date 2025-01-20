import { useEffect, useState } from "react";
import { getAllUserData } from "../../services/users";

import styles from "./Data.module.css"

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
        <td>{user.userId}</td>
        <td>{user.email || ""}</td>
        <td>{user.aboutMe || ""}</td>
        <td>{user.birthday || ""}</td>
        <td>{user.address1 || ""}</td>
        <td>{user.address2 || ""}</td>
        <td>{user.city || ""}</td>
        <td>{user.state || ""}</td>
        <td>{user.zipcode || ""}</td>
      </tr>
    ));

    return (
      <table border={15} className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  return <div>{generateTable(data)}</div>;
};

export default Data;
