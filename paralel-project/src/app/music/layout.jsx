import React from "react";

const MusicLayout = ({ children, sidebar, songs }) => {
  return (
    <div className="flex">
      {sidebar}
      <div className="flex-1 p-6">{songs}</div>
      {children}
    </div>
  );
};

export default MusicLayout;
