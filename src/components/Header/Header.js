/** @jsxImportSource @emotion/react */

import { Title, HeaderContainer, AddButton } from "./HeaderStyles";

function Header({ setShowAddForm }) {
  function handleCloseAddForm(event) {
    event.preventDefault();
    setShowAddForm(true);
  }
  return (
    <HeaderContainer>
      <Title>Participants</Title>
      <AddButton onClick={handleCloseAddForm}>+</AddButton>
    </HeaderContainer>
  );
}

export default Header;
