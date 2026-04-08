import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import ApartmentCard from "../components/ApartmentCard";
import ApartmentDetail from "../components/ApartmentDetail";
import { apartments } from "../data/apartments";

const defaultFilters = {
  query: "",
  type: "",
  maxPrice: "",
  petFriendly: false,
  parking: false,
};

export default function ApartmentsPage() {
  const [filters, setFilters] = useState(defaultFilters);
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let list = [...apartments];

    if (filters.query) {
      const q = filters.query.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.address.toLowerCase().includes(q)
      );
    }
    if (filters.type) {
      list = list.filter((a) => a.type === filters.type);
    }
    if (filters.maxPrice) {
      list = list.filter((a) => a.price <= Number(filters.maxPrice));
    }
    if (filters.petFriendly) {
      list = list.filter((a) => a.petFriendly);
    }
    if (filters.parking) {
      list = list.filter((a) => a.parking);
    }

    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "sqft") list.sort((a, b) => b.sqft - a.sqft);

    return list;
  }, [filters, sortBy]);

  if (selected) {
    return (
      <main className="main">
        <ApartmentDetail apt={selected} onBack={() => setSelected(null)} />
      </main>
    );
  }

  return (
    <>
      <SearchBar filters={filters} onChange={setFilters} />
      <main className="main">
        <div className="listings-header">
          <p className="listings-count">
            {filtered.length} apartment{filtered.length !== 1 ? "s" : ""} found
          </p>
          <div className="sort-row">
            <label>Sort by:</label>
            <select
              className="search-select sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="sqft">Most Space</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">
            <span>🔍</span>
            <h3>No apartments match your filters</h3>
            <p>Try adjusting your search criteria.</p>
            <button className="btn btn-primary" onClick={() => setFilters(defaultFilters)}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="apt-grid">
            {filtered.map((apt) => (
              <ApartmentCard key={apt.id} apt={apt} onClick={setSelected} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
