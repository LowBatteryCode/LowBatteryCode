import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="grid grid-cols-4 bg-green-500">
      <h1 className="col-span-2 text-4xl mb-2 ml-2 font-bold text-white">Low Battery Code</h1>
        <ul className="col-span-2 flex justify-end my-auto">
          <li>
            <NavLink to="/" className='mr-5 text-white font-semibold hover:text-cyan-200'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Blog" className='mr-5 text-white font-semibold hover:text-cyan-200'>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/Actualizaciones" className='mr-5 text-white font-semibold hover:text-cyan-200'>Actualizaciones</NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className='mr-5 text-white font-semibold hover:text-cyan-200'>Contacto</NavLink>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;
