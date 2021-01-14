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

function Participants({ participants }) {
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
