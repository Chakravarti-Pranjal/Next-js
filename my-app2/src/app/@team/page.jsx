import Link from "next/link";
import React from "react";

const Team = () => {
  // if (2 < 5) {
  //   throw new Error("Error");
  // }
  return (
    <div className="border p-[10rem] w-[30rem]">
      <h1>Team</h1>

      <Link href="/salary">Go To Salary</Link>
    </div>
  );
};

export default Team;
