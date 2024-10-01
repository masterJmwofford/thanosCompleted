import React from "react";
// import { Link } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

import * as userService from "../../utilities/users-service";

function Navbar({ person, setter }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setter(null);
  }
  return (
    <>
      <nav className="naver">
        <button onClick={handleLogOut}>Log-Out</button>
        <div style={{}}>
          <p style={{ margin: "1em", textAlign: "right" }}>
            <h1>Welcome {person.name}</h1>{" "}
          </p>
          <p style={{ margin: "1em", textAlign: "right" }}>
            {" "}
            Logged In : {person.email}
          </p>
        </div>
        <div className="btnContainer">
          {/* <Routes> */}
            {/* <Route path="/" element={} />
            <Route path="/currencies" element={} />
            <Route path="/price/:symbol" element={} /> */}
          {/* </Routes> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
