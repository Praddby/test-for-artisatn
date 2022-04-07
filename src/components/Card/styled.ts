import styled from "styled-components";

export type BodyCardProps = {
  image: string;
};

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 16rem;
  height: 24rem;
  margin-bottom: 20px;
  border-radius: 0.3rem;
  box-shadow: 0 0 3px 1px #aaa;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 5px 3px #aaa;
  }
  `;
  
  export const BodyCard = styled.header<BodyCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 80%;
  align-items: flex-start;
  padding: 1rem 0.7rem;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  color: white;
`;

export const CreateBy = styled.div`
  font-weight: 900;
`;

export const NameField = styled.div`
  font-size: 0.5rem;
  margin-bottom: 0.3rem;
  letter-spacing: 1px;
`;

export const TypeField = styled.div`
  text-transform: uppercase;
`;

export const Name = styled.div`
  font-size: 1.1rem;
`;

export const FooterCard = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-basis: 20%;
  align-items: center;
  padding: 0 0.7rem;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  color: #999;
`;

export const AvailabeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Availabe = styled.div`
  font-weight: 900;
  color: black;
`;

export const Price = styled.div`
  color: blue;
  text-transform: uppercase;
`;