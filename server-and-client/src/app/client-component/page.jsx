"use client";

import { add, sub } from "@/utils";

const ClientComponent = () => {
  console.log(add(1, 2));
  console.log(sub(3, 2));
  return <div>ClientComponent</div>;
};

export default ClientComponent;
