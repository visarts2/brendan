import { Global } from "@emotion/react";
import Main from "./app/index";
import globalStyles from "./global-styles";
import styled from "@emotion/styled";

export default function App() {
  return (
    <GlobalWrapper>
      <Global styles={globalStyles} />
      <Main />
    </GlobalWrapper>
  );
}

const GlobalWrapper = styled.main`
  padding: 24px;
  background-color: #efefee;
`;
