/** @jsxImportSource @emotion/react */

import React, { useState } from "react";

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

import birthdateIcon from "../../assets/icons/birth_baby.svg";
import phoneIcon from "../../assets/icons/cellphone.svg";
import {
  Wrapper,
  ParticipantName,
  Icon,
  ParticipantBirthdate,
  ParticipantPhone,
  Participant,
} from "./ParticipantsStyles";

function Participants() {
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
  return (
    <Wrapper>
      {participants.map((participant) => (
        <Participant>
          <ParticipantName>{participant.name}</ParticipantName>
          <Icon src={birthdateIcon} alt="Birthdate" />
          <ParticipantBirthdate>{participant.birthdate}</ParticipantBirthdate>
          <Icon src={phoneIcon} alt="Phone" />
          <ParticipantPhone>{participant.phone}</ParticipantPhone>
        </Participant>
      ))}
    </Wrapper>
  );
}

export default Participants;
