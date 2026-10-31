
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search photos by author name..."
        className="w-full px-5 py-3 border border-gray-300 rounded-xl
        shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500
        focus:border-purple-500"
      />
    </div>
  );
}

export default SearchBar;
