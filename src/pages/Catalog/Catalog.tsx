import { Filter } from "../../containers/Filter";
import { Products } from "../../containers/Products";
import { CatalogBlock, Title } from "./styled"

export const Catalog = () => {
  return (
    <CatalogBlock>
      <Title>Catalog</Title>
      <Filter />
      <Products />
    </CatalogBlock>
  );
}