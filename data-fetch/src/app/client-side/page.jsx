"use client";

import { useEffect, useState } from "react";

const TodoComponent = () => {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if (res.ok) {
          const data = await res.json();
          setTodo(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (todo) {
    return (
      <div>
        <h1>Todo</h1>
        <p>
          <strong>ID: {todo.id}</strong>
        </p>
        <p>
          <strong>Title: {todo.title}</strong>
        </p>

        <p>
          <strong>Completed: {todo.completed ? "Yes" : "No"}</strong>
        </p>
      </div>
    );
  }
};

export default TodoComponent;
