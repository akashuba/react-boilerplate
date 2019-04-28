import React from "react";
import styled from "styled-components";

export const App = () => (
  <div>
    <StyledH1>My React App!</StyledH1>
  </div>
);

const StyledH1 = styled.h1`
  color: #27aedb;
  text-align: center;
`;
