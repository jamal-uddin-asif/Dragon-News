import { NavLink } from "react-router";
import { useData } from "../../Hooks/useData";

const LeftAsides = () => {
  const { categories } = useData();
  console.log(categories);

  return (
    <div>
      <h2 className="font-semibold "> All Caterogy</h2>
      <div className="flex flex-col">
        {categories &&
          categories.map((categorie) => (
            <NavLink to={`/news/${categorie.id}`}
              className={({ isActive }) =>
                isActive
                  ? "btn border-0 hover:bg-base-200  bg-base-300 "
                  : "btn bg-base-100 border-0 hover:bg-base-200 text-accent "
              
              }
            >
              {categorie.name}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default LeftAsides;
