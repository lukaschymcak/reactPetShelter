const Filter = ({ filters, setFilters }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    return (
        <div className="filter-container">
            <select
                name="type"
                value={filters.type}
                onChange={handleInputChange}
            >
                <option value="All">All Types</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
            </select>
            <input
                type="text"
                name="breed"
                placeholder="Filter by breed..."
                value={filters.breed}
                onChange={handleInputChange}
            />
        </div>
    );
};
export default Filter;
