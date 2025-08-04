import { Link, NavLink } from "react-router-dom";

function Sidebar({ children }) {
  return (
    <aside className="w-[200px] bg-slate-600 text-white">
      <nav className="flex h-full flex-col gap-4 p-2">
        <ul className="flex flex-col">
          <li>
            <NavLink
              to="/products"
              className="block rounded-md p-2 shadow-vibrant-secondary transition hover:bg-vibrant-primary"
            >
              All Products
            </NavLink>
          </li>
          {children}
          <li>
            <NavLink
              to="/basket"
              className="block rounded-md p-2 shadow-vibrant-secondary transition hover:bg-vibrant-primary"
            >
              Basket
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myorders"
              className="block rounded-md p-2 shadow-vibrant-secondary transition hover:bg-vibrant-primary"
            >
              My orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
