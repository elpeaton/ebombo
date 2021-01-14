import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Participants from "./components/Participants/Participants";
import Form from "./components/Form/Form";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [participants, setParticipants] = useState([
    {
      name: "Herbert Miguel Mulanovich Aljovin",
      birthdate: "19/1/1979",
      phone: "999 234 434",
    },
    {
      name: "Mónica Vargas Pineda",
      birthdate: "7/7/1998",
      phone: "999 234 434",
    },
  ]);
  //Function take current participants and add a new one
  const createParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  return (
    <div>
      <Header setShowAddForm={setShowAddForm} />
      <Participants participants={participants} />
      {showAddForm && (
        <Form
          setShowAddForm={setShowAddForm}
          createParticipant={createParticipant}
        />
      )}
    </div>
  );
}

export default App;
