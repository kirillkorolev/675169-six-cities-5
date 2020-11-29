
import Header from "../header/header";
import React from "react";

const NotFound = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className="page__main "
      >
        <h1>404 Not Found</h1>
      </main>
    </div>
  );
};

export default NotFound;
