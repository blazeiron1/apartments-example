export default function SearchBar({ filters, onChange }) {
  return (
    <div className="search-bar">
      <div className="search-inner">
        <h1 className="search-title">Find Your Perfect Apartment</h1>
        <p className="search-subtitle">Browse hundreds of listings and find your next home</p>
        <div className="search-controls">
          <input
            className="search-input"
            type="text"
            placeholder="Search by name or address..."
            value={filters.query}
            onChange={(e) => onChange({ ...filters, query: e.target.value })}
          />
          <select
            className="search-select"
            value={filters.type}
            onChange={(e) => onChange({ ...filters, type: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedroom">2 Bedroom</option>
            <option value="3 Bedroom">3 Bedroom</option>
            <option value="Penthouse">Penthouse</option>
          </select>
          <select
            className="search-select"
            value={filters.maxPrice}
            onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
          >
            <option value="">Any Price</option>
            <option value="1000">Up to $1,000/mo</option>
            <option value="1500">Up to $1,500/mo</option>
            <option value="2000">Up to $2,000/mo</option>
            <option value="3000">Up to $3,000/mo</option>
            <option value="5000">Up to $5,000/mo</option>
          </select>
          <div className="search-toggles">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={filters.petFriendly}
                onChange={(e) => onChange({ ...filters, petFriendly: e.target.checked })}
              />
              Pet Friendly
            </label>
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={filters.parking}
                onChange={(e) => onChange({ ...filters, parking: e.target.checked })}
              />
              Parking
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
