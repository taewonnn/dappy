import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import CartItem from "../components/Cartitem";

export default function MyCart() {

  const {uid} = useAuthContext();
  const {isLoading, data: products} = useQuery(['carts'], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  return (
    <section>
      <p>나의 장바구니</p>
      {hasProducts && <p>장바구니에 상품이 없습니다!!</p>}
      {products &&
        products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </section>
  );
}

