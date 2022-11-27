/* eslint-disable react/prop-types */
function MenuFilter({ changeFilter, filter }) {
  const handleSubmit = (event) => {
    changeFilter(event.target.innerText);
  };

  return (
    <div className="m-0 m-auto p-0 m-4 m-auto bg-white rounded-md shadow-lg">
      <div className="flex flex-row justify-evenly p-3 text-[#9797A1]">
        <button
          className={filter === "All" ? "text-[#407AE8]" : "hover:text-black"}
          type="button"
          onClick={handleSubmit}
        >
          All
        </button>
        <button
          className={
            filter === "Active" ? "text-[#407AE8]" : "hover:text-black"
          }
          type="button"
          onClick={handleSubmit}
        >
          Active
        </button>
        <button
          className={
            filter === "Completed" ? "text-[#407AE8]" : "hover:text-black"
          }
          type="button"
          onClick={handleSubmit}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default MenuFilter;
