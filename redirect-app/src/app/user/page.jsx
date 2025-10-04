import { redirect } from "next/navigation";
import React from "react";

const User = () => {
  redirect("/not-found");
  return <div>User</div>;
};

export default User;
