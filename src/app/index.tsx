import styled from "@emotion/styled";

export default function Main() {
  return (
    <Wrapper>
      <h1>Brendan J. Best</h1>
      <Container>TBD</Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    font-size: 3rem;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
