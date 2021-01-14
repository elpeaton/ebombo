/** @jsxImportSource @emotion/react */

import React from "react";

import moment from "moment";
import _ from "lodash";

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
      {_.sortBy(participants, "name").map((participant) => (
        <Participant>
          <ParticipantName>{participant.name}</ParticipantName>
          <Icon src={birthdateIcon} alt="Birthdate" />
          <ParticipantBirthdate>
            {moment(participant.birthdate).format("Do MMM YYYY")}
          </ParticipantBirthdate>
          <Icon src={phoneIcon} alt="Phone" />
          <ParticipantPhone>{participant.phone}</ParticipantPhone>
        </Participant>
      ))}
    </Wrapper>
  );
}

export default Participants;
