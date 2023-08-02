import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addOrUpdateToCart } from "../api/firebase";

export default function CartItem({ product, product: {id, image, title, option, quantity, price}, uid }) {

  const handleMinus = (e) => {
    if(quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 })
  }

  const handlePlus = (e) => addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 })

  const handleDelete = () => addOrUpdateToCart(uid, id);


  return (
    <li className='flex justify-between'>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <div>
          <AiOutlineMinusSquare onClick={handleMinus}/>
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handlePlus} />
          <RiDeleteBin5Fill onClick={handleDelete} />
        </div>
      </div>
    </li>
  )
}
