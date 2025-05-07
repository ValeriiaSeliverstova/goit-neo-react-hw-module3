export default function SearchBox() {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          // value={filter}
          // onChange={onFilterChange}
        />
      </label>
    </div>
  );
}
