import React from "react";
import "./Home.css";
import Option from "../../components/option/Option";
import { home } from "../../util/Home";

function Home() {
  return (
      <div className="option-container">
        {home.map((project) => {
          return <Option project={project} />;
        })}
    </div>
  );
}

export default Home;
