import React from "react";
import {
  auth,
  logOut,
  signInWithGoogle
} from "../../Firebase";

function Dashboard() {
  return (
    <div>
      Dashboard
      <button onClicl={logOut}>Logout</button>

    </div>
  );
}

export default Dashboard;
