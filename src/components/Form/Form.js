/** @jsxImportSource @emotion/react */

import React, { useState } from "react";

import {
  Modal,
  ModalForm,
  Title,
  Label,
  Input,
  AddButton,
  ErrorMessage,
  HeaderForm,
  CloseIcon,
} from "./FormStyles";
import closeIcon from "../../assets/icons/close.svg";

function Form({ setShowAddForm, createParticipant }) {
  // To close modal
  function handleCloseAddForm(event) {
    event.preventDefault();
    setShowAddForm(false);
  }

  // Create State of participant
  const [participant, setParticipant] = useState({
    name: "",
    birthdate: "",
    phone: "",
  });

  // Function triggers every time user writes on input
  const handleChange = (e) => {
    setParticipant({ ...participant, [e.target.name]: e.target.value });
  };

  // Extract values
  const { name, birthdate, phone } = participant;

  // Error State
  const [error, setError] = useState(false);

  // When the user presses Add
  const submitParticipant = (e) => {
    e.preventDefault();
    // Validation
    if (name.trim() === "" || birthdate.trim() === "" || phone.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Create participant
    createParticipant(participant);

    // Reset form
    setParticipant({
      name: "",
      birthdate: "",
      phone: "",
    });

    // Close form
    setShowAddForm(false);
  };
  return (
    <Modal>
      <ModalForm onSubmit={submitParticipant}>
        <HeaderForm>
          <Title>New Participant</Title>
          <CloseIcon src={closeIcon} alt="Close" onClick={handleCloseAddForm} />
        </HeaderForm>
        <Label>Name:</Label>
        <Input type="text" name="name" onChange={handleChange} value={name} />
        <Label>Birth date:</Label>
        <Input
          type="date"
          name="birthdate"
          onChange={handleChange}
          value={birthdate}
        />
        <Label>Phone:</Label>
        <Input type="text" name="phone" onChange={handleChange} value={phone} />
        <AddButton type="submit">ADD</AddButton>
        {error && <ErrorMessage>Please complete all the fields</ErrorMessage>}
      </ModalForm>
    </Modal>
  );
}
export default Form;
