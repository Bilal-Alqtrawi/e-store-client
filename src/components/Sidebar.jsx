import { Link, NavLink } from "react-router-dom";

function Sidebar({ children }) {
  return (
    <aside className="w-[200px] bg-slate-600 text-white dark:bg-zinc-900 dark:text-white">
      <nav className="flex h-full flex-col gap-4 p-2">
        <ul className="flex flex-col">
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `mb-2 block rounded-md p-2 transition ${
                  isActive
                    ? "bg-vibrant-primary text-white dark:bg-indigo-700"
                    : "hover:bg-vibrant-primary dark:hover:bg-zinc-700"
                }`
              }
            >
              All Products
            </NavLink>
          </li>
          {children}
          <li>
            <NavLink
              to="/basket"
              className={({ isActive }) =>
                `mb-2 block rounded-md p-2 transition ${
                  isActive
                    ? "bg-vibrant-primary text-white dark:bg-indigo-700"
                    : "hover:bg-vibrant-primary dark:hover:bg-zinc-700"
                }`
              }
            >
              Basket
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myorders"
              className={({ isActive }) =>
                `block rounded-md p-2 transition ${
                  isActive
                    ? "bg-vibrant-primary text-white dark:bg-indigo-700"
                    : "hover:bg-vibrant-primary dark:hover:bg-zinc-700"
                }`
              }
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
