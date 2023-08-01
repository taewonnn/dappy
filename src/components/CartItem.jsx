import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function CartItem({ product, product: {id, image, title, option, quantity, price} }) {

  const handleMinus = (e) => {

  }

  const handlePlus = (e) => {

  }

  const handleDelete = (e) => {

  }

  return (
    <li>
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
