import React from "react";
import UserInfoWithTitle from "./UserInfoWithTitle";

const Page = ({ user }) => {
  return (
    <div>
      <div>...</div>
      <UserInfoWithTitle title="User Info" user={user} />
      <div>...</div>
    </div>
  );
};

export default Page;
