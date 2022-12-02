import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div>
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
    </div>
  );
};

export default UserInfo;
