import React from "react";

function SidebarMobile() {
  const category = ["all-categories", "sneakers", "flats", "heels", "sandals"];
  const color = ["all-colors", "black", "white", "blue", "red"];
  const company = ["all-companies", "Nike", "Adidas", "Vans", "Puma"];

  //const dispatch = useDispatch();
  //const filters = useSelector((state) => state.filter.filters);
  //console.log(filters);

  const changeColor = (e) => {
    //console.log(e.target.name);
    // dispatch(setColor(e.target.name));
  };
  const changeCompany = (e) => {
    //console.log(e.target.name);
    //dispatch(setCompany(e.target.name));
  };
  const changeCategory = (e) => {
    //console.log(e.target.name);
    //dispatch(setCategory(e.target.name));
  };

  return (
    <div className="w-[90%] h-[77vh] py-3  left-[5%] z-20  absolute shadow-2xl bg-white border border-slate-400 rounded-md lg:hidden ">
      <div className="capitalize   w-full h-auto flex flex-col items-start pl-10 gap-3">
        <h1 className="text-2xl font-semibold font-sans">Colors</h1>
        <ul className="text-xl font-sans w-full">
          {color.map((item) => (
            <li
              key={item}
              className="flex items-center justify-start gap-3 w-[80%] h-auto pl-2 "
            >
              <input
                className="h-[19px] w-[19px]"
                type="radio"
                id={item}
                name={item}
                //checked={item === filters.color}
                onChange={changeColor}
              />
              <label htmlFor={item}>
                {item === "all-colors" ? "All" : item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* company */}
      <div className="capitalize w-full h-auto flex flex-col items-start pl-10 gap-3">
        <h1 className="text-2xl font-semibold font-sans">Company</h1>
        <ul className="text-xl font-sans w-full">
          {company.map((item) => (
            <li
              key={item}
              className="flex items-center justify-start gap-3 w-[80%] h-auto pl-2 "
            >
              <input
                className="h-[19px] w-[19px]"
                type="radio"
                id={item}
                name={item}
                //checked={item === filters.company}
                onChange={changeCompany}
              />
              <label htmlFor={item}>
                {item === "all-companies" ? "All" : item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* category */}
      <div className="capitalize w-full h-auto flex flex-col items-start pl-10 gap-3">
        <h1 className="text-2xl font-semibold font-sans">Category</h1>
        <ul className="text-xl font-sans w-full">
          {category.map((item) => (
            <li
              key={item}
              className="flex items-center justify-start gap-3 w-[80%] h-auto pl-2 "
            >
              <input
                className="h-[19px] w-[19px]"
                type="radio"
                id={item}
                name={item}
                //checked={item === filters.category}
                onChange={changeCategory}
              />
              <label htmlFor={item}>
                {item === "all-categories" ? "All" : item}
              </label>
            </li>
          ))}
        </ul>

        <div className="w-4/5 mt-10 flex justify-between">
          <button className="font-sans text-xl p-3 bg-red-500 text-white rounded-md">
            Clear filter
          </button>
          <button className="font-sans text-xl p-3 px-4 bg-indigo-500 text-white rounded-md">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarMobile;
