import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #39ccdc;
  min-height: 8rem;
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 0 3px 6px #00000030;
`;

export const Title = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  padding-left: 2rem;
`;

export const AddButton = styled.div`
  font-size: 5rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  padding-right: 2rem;
`;
