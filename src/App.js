import React, { useEffect, useState } from "react";

const API = "Test.json";

const App = () => {
  const [users, setUsers] = useState([]); // set user data using useState
  const [loading, setLoading] = useState(true); // add a loading state
  const [sortColumn, setSortColumn] = useState(null); // add a sort column state
  const [sortDirection, setSortDirection] = useState(null); // add a sort direction state

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
        setLoading(false); // set loading to false when data is loaded
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    const sortedUsers = [...users].sort((a, b) => {
      if (sortDirection === "asc") {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setUsers(sortedUsers);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>ID</th>
              <th onClick={() => handleSort("firstName")}>FirstName</th>
              <th onClick={() => handleSort("lastName")}>LastName</th>
              <th onClick={() => handleSort("birthday")}>Birthday</th>
              <th onClick={() => handleSort("gender")}>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser) => {
              const { id, firstName, lastName, birthday, gender } = curUser;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{birthday}</td>
                  <td>{gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;