// src/pages/CreateUser.tsx
import React, { useState } from "react";
import "./createUser.css";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const CreateUser: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    username: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<User>>({});
  const [showPopup, setShowPopup] = useState(false);

  const validate = (): boolean => {
    let valid = true;
    const newErrors: Partial<User> = {};

    if (!user.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!user.username) {
      newErrors.username = "Username is required";
      valid = false;
    }
    if (!user.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowPopup(true);
    }
  };

  return (
    <div className="create-user-container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Add</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>User Details</h2>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateUser;
