import React from "react";

const ServerComp = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);

  if (data) {
    return (
      <div>
        <h1>Todo</h1>
        <p>
          <strong>ID: {data.id}</strong>
        </p>
        <p>
          <strong>Title: {data.title}</strong>
        </p>

        <p>
          <strong>Completed: {data.completed ? "Yes" : "No"}</strong>
        </p>
      </div>
    );
  }
};
export default ServerComp;
