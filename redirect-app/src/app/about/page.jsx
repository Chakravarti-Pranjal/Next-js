import React from "react";

const About = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content Loading...");
    }, 4000)
  );
  return <div>About</div>;
};

export default About;
