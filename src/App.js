import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Participants from "./components/Participants/Participants";
import Form from "./components/Form/Form";

function App() {
  return (
    <div>
      <Header />
      <Participants />
      <Form />
    </div>
  );
}

export default App;
