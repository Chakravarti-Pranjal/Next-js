import React from "react";

const page = async ({ params }) => {
  const { user } = await params;
  return <div>Hi {user}</div>;
};

export default page;
