import React from "react";
import { Secrets } from "components";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="text-center">
      <h1>Reviel The Secret</h1>
      <Secrets />
    </div>
  );
};

export default Home;
