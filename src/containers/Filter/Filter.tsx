import { ChangeEvent } from "react";
import { useDispatch } from "react-redux"
import { filterProducts, getProducts } from "../../redux/actions/products";
import { Filter as FilterView } from '../../components/Filter'

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterProducts(e.target.checked));
  }

  return <FilterView handleChange={handleChange} />
}