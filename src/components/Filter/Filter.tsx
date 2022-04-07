import { ChangeEvent } from "react";
import { Wrapper, ToggleTitle, EditToggleWrapper, CheckBox, Pin, BackLayer } from "./styled";

type FilterProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Filter = ({ handleChange }: FilterProps) => {
  return (
    <Wrapper>
      <ToggleTitle>Checking availability</ToggleTitle>
      <EditToggleWrapper>
        <CheckBox type="checkbox" onChange={handleChange} />
        <Pin />
        <BackLayer />
      </EditToggleWrapper>
    </Wrapper>
  );
};
