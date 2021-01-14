import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Participant = styled.div`
  display: grid;
  grid-template-columns: 6% auto 6% 30%;
  grid-template-rows: 2;
  grid-gap: 5px;
  border-bottom: 1px solid #5b6678;
  padding: 2rem 0;
`;

export const ParticipantName = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  grid-column: span 4;
  text-align: left;
  padding-bottom: 1rem;
`;

export const ParticipantBirthdate = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const ParticipantPhone = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  text-align: left;
`;
