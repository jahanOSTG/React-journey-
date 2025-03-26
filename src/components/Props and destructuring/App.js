import React from "react";
import Card from "./components/Card/card";

function App() {
  return (
    <div>
      <h1 className="headingStyle">TO DO App</h1>
      <Card titleText="Call Mother" descText="This is desc1" /> {/* Fixed prop name */}
      <Card  titleText="Call Father" descText="This is desc1" />
      <Card  titleText="Call Sister" descText="This is desc1" />
    </div>
  );
}

export default App;
