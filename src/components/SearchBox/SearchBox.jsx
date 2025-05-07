import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className="search-box">
      <label>
        Find contacts by name
        <input
          className="search-input"
          type="text"
          name="filter"
          // value={filter}
          // onChange={onFilterChange}
        />
      </label>
    </div>
  );
}
