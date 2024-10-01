import React from "react";
import * as userService from '../utilities/users-service'

function Profile({ user }) {
  return (
    <div>
      Welcome {user.name}! <hr />
      Currently Logged In:  {user.email}<br/>
      <button onClick={userService.logOut}>LogOut</button>
    </div>
  );
}

export default Profile;
