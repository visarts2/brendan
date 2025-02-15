import { breakpoints, measures } from "./tokens";

import { css } from "@emotion/react";

const globalStyles = css`
  html * {
    box-sizing: border-box;
  }

  body {
    color: #031926;
    background-color: #031926;
    padding: ${measures.medium} ${measures.xlarge};
    margin: 0;
    font-size: 1.1rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.35;

    ${breakpoints.mobile(css`
      padding: ${measures.small};
    `)}
  }

  h1 {
    font-family: "Times New Roman", Times, serif;
    font-weight: 500;
    line-height: 1;
  }
`;

export default globalStyles;
