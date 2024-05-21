// DataTable.tsx
import React, { useState, useEffect } from "react";

// Define the data structure
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const DataTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [fetchdata, setFetchdata] = useState<boolean>(false);

  // Fetch data using `useEffect`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: User[] = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error: unknown) {
        setLoading(false);
        setError((error as Error).message);
      }
    };

    fetchData();
  }, [fetchdata]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="button"
        value={"Call API"}
        onClick={() => {
          setFetchdata(true);
        }}
      ></input>
      <h2>User Data</h2>
      <table style={{ border: 1 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
