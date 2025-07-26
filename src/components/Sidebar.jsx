import { Link } from "react-router-dom";

function Sidebar({ children }) {
  return (
    <aside className="w-[200px] bg-slate-600 text-white">
      <nav className="flex h-full flex-col gap-4 p-2">
        <ul className="flex flex-col">
          {children}
          <li>
            <Link
              to="/basket"
              className="block rounded-md p-2 shadow-vibrant-secondary transition hover:bg-vibrant-primary"
            >
              Basket
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
