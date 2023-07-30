import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";

export default function CartStatus() {

  const { data: products } = useQuery(['carts'], getCart);

  return (
    <>
      <AiOutlineShoppingCart />
      { products && <p>{products.length}</p>}
    </>
  )
}
