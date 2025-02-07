import Resume from "./resume";
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
  }
`;
