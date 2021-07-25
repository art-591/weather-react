import React from "react";

export default function SearchForm() {
  return (
    <form className="search">
      <div className="row">
        <div className="col-8 search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search City"
            id="city-input"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-warning">
            Search
          </button>
        </div>
        <div className="col-2">
          <button id="current" className="btn btn-warning">
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
