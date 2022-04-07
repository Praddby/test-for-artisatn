import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Card } from '../../components/Card';
import { getAllProductsSuccess } from '../../redux/actions/products';
import { getProducts } from '../../redux/selectors/products';
import { CardList } from './styled';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(getAllProductsSuccess());
  }, []);

  return (
    <CardList>
      {products.map(product => {
        return (<Card key={product.product_id} product={product} />);
      })}
    </CardList>
  );
}
