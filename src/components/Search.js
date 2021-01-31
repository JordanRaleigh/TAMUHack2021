import React, { useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmission = async () => {
    let res = await fetch(
      `https://7a8424e98eb3.ngrok.io/api/food/${search}/${zipCode}`
    );
    try {
      let status = res.status;
      if (status !== 200) return console.log(await res.text());
      console.log(await res.text());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="input-group">
      <input
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
      </button>

      <div className="input-group">
        <input type="text" placeholder="Food name" class="form-control" />
        <input type="text" placeholder="ZIP Code" class="form-control" />
        <button class="btn btn-outline-primary" onClick={handleSubmission}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
