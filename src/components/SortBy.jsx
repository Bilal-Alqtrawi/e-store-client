import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

const options = [
  { value: "price-desc", label: "Sort by price (high first)" },
  { value: "price-asc", label: "Sort by price (low first)" },
  { value: "name-desc", label: "Sort by name (high first)" },
  { value: "name-asc", label: "Sort by name (low first)" },
  { value: "stock-desc", label: "Sort by stock (high first)" },
  { value: "stock-asc", label: "Sort by stock (low first)" },
  { value: "order", label: "Sort by default" },
];

function SortBy({ sortBy, handleSortBy }) {
  return (
    <div className="mb-4 flex items-center justify-end gap-2 rounded-md bg-white px-3 py-2 shadow-sm">
      <label htmlFor="sortBy" className="flex items-center gap-1">
        <span>Sort by:</span>
        <ArrowsUpDownIcon className="size-5 text-gray-500" />
      </label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={handleSortBy}
        className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm focus:border-vibrant-accent focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;
