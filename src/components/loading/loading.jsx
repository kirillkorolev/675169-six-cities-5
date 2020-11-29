
import Header from "../header/header";
import React from "react";

const Loading = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className="page__main "
      >
        <div>Loading...</div>
      </main>
    </div>
  );
};

export default Loading;
