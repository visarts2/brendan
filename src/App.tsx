import { Global } from "@emotion/react";
import Main from "./app/index";
import globalStyles from "./global-styles";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Main />
    </>
  );
}

export default App;
