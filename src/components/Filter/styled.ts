import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const ToggleTitle = styled.span`
  margin-right: 10px;
  font-size: 18px;
  color: #acafbf;
  font-style: italic;
  font-weight: bold;
`;

export const EditToggleWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 26px;
  overflow: hidden;
  border-radius: 100px;
`;

export const Pin = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  transition: 0.3s ease all;

  &::before {
    content: 'OFF';
    position: absolute;
    top: 1px;
    left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    color: white;
    font-size: 9px;
    font-weight: bold;
    background-color: #d35d47;
    border-radius: 50%;
    transition: 0.3s ease all;
  }
`;

export const BackLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f2f3f7;
  z-index: 1;
  transition: 0.3s ease all;
`;

export const CheckBox = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;

  &:checked + ${Pin}::before {
    content: 'ON';
    left: 44px;
    background-color: #30b6dd;
  }
`;