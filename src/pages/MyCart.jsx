import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import CartItem from "../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";

const SHIPPING = 3000;
export default function MyCart() {

  // id 임의 생성
  const {uid} = useAuthContext();

  // useQuery
  const {isLoading, data: products} = useQuery(['carts'], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice = products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity, 0)

  return (
    <section className=' flex flex-col p-8'>
      <p className='tex-2xl text-center font-bold pb-4 border-b border-gray-300 '>나의 장바구니</p>
      {!hasProducts && <p>장바구니에 상품이 없습니다!!</p>}
      {products && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))
            }
          </ul>
          <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16'>
            <PriceCard text='상품 총액' price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0'/>
            <PriceCard text='배송비' price={SHIPPING} />
            <FaEquals className='shrink-0' />
            <PriceCard text='총 금액' price={totalPrice + SHIPPING } />
          </div>
          <Button text='주문하기'/>
        </>
        )}
      </section>
  );
}

