import { Product } from "../../redux/reducers/products"
import {
  Availabe,
  AvailabeBlock,
  BodyCard,
  CreateBy,
  FooterCard,
  Name,
  NameField,
  Price,
  PriceBlock,
  TypeField,
  WrapperCard,
} from "./styled";

type CardType = {
  product: Product;
}

export const Card = ({ product }: CardType) => {
  const { quantity, quantity_available, name, type, created_by, initial_price } = product;

  return (
    <WrapperCard>
      <BodyCard image={`https://cdn.artisant.io/api/files/${created_by.image.compressed}`}>
        <CreateBy>
          <NameField>
            created by
          </NameField>
          CreateBy
        </CreateBy>
        <Name>
          <TypeField>
            {type}
          </TypeField>
          {name}
        </Name>
      </BodyCard>
      <FooterCard>
        <AvailabeBlock>
          <NameField>
            available
          </NameField>
          <Availabe>
            {quantity_available} of {quantity}
          </Availabe>
        </AvailabeBlock>
        <PriceBlock>
          <NameField>
            price
          </NameField>
          <Price>
            {initial_price} ETH
          </Price>
        </PriceBlock>
      </FooterCard>
    </WrapperCard>
  );
};
