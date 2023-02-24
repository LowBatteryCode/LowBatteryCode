import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="grid grid-cols-4 bg-lime-500 ">
      <h1 className="col-span-2 text-3xl">Low Battery Code</h1>
      <nav className="col-span-2">
        <ul className="">
          <li>
            <NavLink to="/" className='mr-5'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Blog" className='mr-5'>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/Actualizaciones" className='mr-5'>Actualizaciones</NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className='mr-5'>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
