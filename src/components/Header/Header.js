/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

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
