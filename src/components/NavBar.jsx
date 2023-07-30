import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { login, logout, onUserStateChange } from "../api/firebase";
import { useEffect, useState } from "react";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function NavBar() {

  const { user, login, logout } = useAuthContext();

  // const [user, setUser] = useState();
  //
  //
  // useEffect(() => {
  //   onUserStateChange((user) => {
  //     console.log(user);
  //     setUser(user);
  //   })
  // }, [])

  // const handleLogin = () => {
  //   login();
  // }

  // const handleLogout = () => {
  //   logout();
  // }

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Dappy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold '>
        <Link to='/products'>Products</Link>
        { user &&  <Link to='/carts'><CartStatus/></Link> }
        { user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl '>
            <BsFillPencilFill />
          </Link>
        ) }
        { user && <User user={user}/>}
        { !user && <Button text={'Login'} onClick={login}>Login</Button> }
        { user && <Button text={'Logout'} onClick={logout}>Logout</Button> }
      </nav>
    </header>
  )
}
