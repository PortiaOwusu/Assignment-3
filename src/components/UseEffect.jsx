import { useState, useEffect } from "react";
import "./UseEffect.css";
const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div className="app-body">
      <h1>Customer Engagement </h1>
      <br />
      {users.map((user, i) => (
        <div key={i} className="card">
          <h5>
            <strong>Name:</strong> {user.name}
          </h5>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Phone Number:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          {/* <hr /> */}
        </div>
      ))}
    </div>
  );
};

export default UseEffect;
