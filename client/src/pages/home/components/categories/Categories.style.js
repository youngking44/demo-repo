import styled from "styled-components";
import { smallScreenDevice } from "../../../../style-responsiveness/reponsiveness";

export const Wrapper = styled.div``;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 40px;

  ${smallScreenDevice({ flexDirection: "column", alignItems: "center" })}
`;
