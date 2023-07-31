import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";

export default function MyCart() {

  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));

  if(isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  return (
    <>
      MyCart
    </>
  )
}
