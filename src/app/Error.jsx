"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h1>Something went Wrong</h1>
      <button onClick={() => reset()}>try again</button>
    </div>
  );
};

export default Error;
