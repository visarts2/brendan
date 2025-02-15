import Resume from "./Resume";
import { breakpoints } from "../tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Wrapper>
      <Resume />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    font-size: 3rem;
    margin: 0;

    ${breakpoints.mobile(css`
      font-size: 2.5rem;
    `)}
  }
`;
