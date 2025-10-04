"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div className="text-center">
      <h1>Login</h1>
      <p>Don't have an account?</p>
      <button
        onClick={() => router.push("/sign-up")}
        className="cursor-pointer"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Login;
