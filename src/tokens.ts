import { type SerializedStyles, css } from "@emotion/react";

export const breakpoints = {
  desktop: (styles: SerializedStyles) => css`
    @media (min-width: 992px) {
      ${styles}
    }
  `,
  tablet: (styles: SerializedStyles) => css`
    @media (max-width: 991px) {
      ${styles}
    }
  `,
  mobile: (styles: SerializedStyles) => css`
    @media (max-width: 768px) {
      ${styles}
    }
  `,
};

export const measures = {
  small: "1rem",
  medium: "2rem",
  large: "3rem",
  xlarge: "4rem",
};
