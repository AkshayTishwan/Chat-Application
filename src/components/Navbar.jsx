import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  // Check if currentUser exists and has a displayName
  const displayName = currentUser && currentUser.displayName ? currentUser.displayName : '';

  // Capitalize only the first letter of the display name
  const capitalizedDisplayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{capitalizedDisplayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
