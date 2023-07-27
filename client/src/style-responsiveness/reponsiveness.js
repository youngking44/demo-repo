import { css } from "styled-components";

export const extralSmallScreenDevice = (props) => {
  return css`
    @media (max-width: 578px) {
      ${props}
    }
  `;
};

export const smallMobile = (props) => {
  return css`
    @media (max-width: 400px) {
      ${props}
    }
  `;
};

export const smallScreenDevice = (props) => {
  return css`
    @media (max-width: 768px) {
      ${props}
    }
  `;
};

export const mediumScreenDevice = (props) => {
  return css`
    @media (max-width: 992px) {
      ${props}
    }
  `;
};

export const largeScreenDevice = (props) => {
  return css`
    @media (min-width: 991px) {
      ${props}
    }
  `;
};
