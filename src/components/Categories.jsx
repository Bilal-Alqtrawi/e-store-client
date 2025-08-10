import { NavLink } from "react-router-dom";
import Loading from "./Loading";

function Categories({ categories }) {
  return (
    <>
      {categories.errorMessage && <p>Error: {categories.errorMessage}</p>}
      {categories.data && (
        <>
          {categories.data.map((category) => (
            <li key={category.id} className="mb-2">
              <NavLink
                to={`categories/${category.id}`}
                className={({ isActive }) =>
                  `mb-2 block rounded-md p-2 transition ${
                    isActive
                      ? "bg-vibrant-primary text-white dark:bg-indigo-700"
                      : "hover:bg-vibrant-primary dark:hover:bg-zinc-700"
                  }`
                }
              >
                {category.title}
              </NavLink>
            </li>
          ))}
        </>
      )}
    </>
  );
}

export default Categories;
