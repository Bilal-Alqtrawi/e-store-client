import { Link, NavLink } from "react-router-dom";

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
                className="block rounded-md p-2 shadow-vibrant-secondary transition hover:bg-vibrant-primary"
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
