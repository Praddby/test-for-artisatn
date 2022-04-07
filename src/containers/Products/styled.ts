import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 620px) {
    justify-content: center;
  }
`;
