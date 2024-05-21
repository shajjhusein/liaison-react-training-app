// src/pages/Profile.tsx
import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user.username);

  const usernameLength = useMemo(() => {
    return username.length;
  }, [username]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/");
  }, [dispatch, navigate]);

  const handleDataTableRoute = useCallback(() => {
    navigate("/data-table");
  }, [navigate]);

  const handleCreateNewUserRoute = useCallback(() => {
    navigate("/create-user");
  }, [navigate]);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <p>Welcome, {username}!</p>
      <p>Your username is {usernameLength} characters long.</p>
      <button onClick={handleDataTableRoute}>Go To DataTable</button>
      <button onClick={handleCreateNewUserRoute}>Create New User Form</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
