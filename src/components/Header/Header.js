/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

import { Title, HeaderContainer, AddButton } from "./HeaderStyles";

function Header() {
  return (
    <HeaderContainer>
      <Title>Participants</Title>
      <AddButton>+</AddButton>
    </HeaderContainer>
  );
}

export default Header;
