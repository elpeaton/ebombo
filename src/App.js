import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Participants from "./components/Participants/Participants";
import Form from "./components/Form/Form";

function App() {
  // State to open or close the form
  const [showAddForm, setShowAddForm] = useState(false);

  // Participants on localStorage
  let participantsStarted = JSON.parse(localStorage.getItem("participants"));
  if (!participantsStarted) {
    participantsStarted = [];
  }
  // State for participants array
  const [participants, setParticipants] = useState(participantsStarted);

  useEffect(() => {
    let participantsStarted = JSON.parse(localStorage.getItem("participants"));
    if (participantsStarted) {
      localStorage.setItem("participants", JSON.stringify(participants));
    } else {
      localStorage.setItem("participants", JSON.stringify([]));
    }
  }, [participants]);

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
