import React, { useState } from "react";

function Search({ handleSubmission }) {
  const [search, setSearch] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <div class="">
      {/* <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <input
        type="number"
        class="form-control rounded"
        placeholder="ZIP Code"
        aria-label="ZIP Code"
        aria-describedby="search-addon"
        value={zipCode}
        onChange={(e) => {
          setZipCode(e.target.value);
        }}
      />
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={handleSubmission}
      >
        search
      </button> */}

      <div className="input-group">
        <input
          type="text"
          placeholder="Food name"
          class="form-control"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ZIP Code"
          class="form-control"
          value={zipCode}
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
        />
        <button
          class="btn btn-outline-primary"
          onClick={() => {
            handleSubmission(zipCode, search);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
