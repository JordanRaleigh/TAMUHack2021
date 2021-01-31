import React, { useState } from "react";

function Search({ handleSubmission }) {
  const [search, setSearch] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <div class="w-75 mx-auto my-4">
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
          type="number"
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
