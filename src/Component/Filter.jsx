import "./Filter.css";

function Filter({
  onFilterChange,
  totalItem,
  appliedFilter,
  showFilter,
  setShowFilter,
}) {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

 

  return (
    <div className="filter-container">
      <div>
        <span className="total-item">{totalItem + " ITEMS"}</span>
        <span
          style={{ marginLeft: "40px", cursor: "pointer" }}
          onClick={() => setShowFilter((flag) => !flag)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "5px" }}
          >
            <path
              d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
              stroke="#292D32"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
        </span>
      </div>

      <select
        id="filter-select"
        onChange={handleFilterChange}
        value={appliedFilter}
      >
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="recommended">Recommended</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="newestFirst">Newest First</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
}

export default Filter;
