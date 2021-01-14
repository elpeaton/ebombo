import styled from "@emotion/styled";

export const Modal = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  background: rgba(240, 209, 183, 0.69);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    width: 375px;
  }
`;

export const ModalForm = styled.form`
  background: #ffffff;
  width: 24rem;
  height: 31rem;
  padding: 3rem;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 4rem repeat(6, 2.2rem);
  grid-gap: 12px;
`;

export const HeaderForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const CloseIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #5e697b;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const AddButton = styled.button`
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: #39ccdc;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  height: 3.5rem;
`;

export const ErrorMessage = styled.p`
  color: #fd5e4c;
  font-size: 1.3rem;
`;
