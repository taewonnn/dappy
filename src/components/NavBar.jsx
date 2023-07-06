import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

export default function NavBar() {
  return (
    <header className='flex justify-between'>
      <div className='bg-blue-800'>왜 안돼??</div>
      <Link to='/'>
        <FiShoppingBag />
        <h1>Dappy</h1>
      </Link>
      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'>
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  )
}
