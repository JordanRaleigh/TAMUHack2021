import React, { useState } from 'react';
import Client from '../Client';
import FoodItemcontainer from '../components/FoodItemContainer';
import Nav from '../components/Nav';
import Search from '../components/Search';

function Home() {
  const [foods, setFoods] = useState([]);

  const handleSubmission = async (zipCode, search) => {
    Client.findFoodsZip(search, zipCode, setFoods);
  };

  return (
    <div className="container justify-content-center">
      <div className="align-items-center d-flex flex-column justify-content-center">
        <h1 className="display-4">Welcome to FoodIt</h1>
        <h4 className="display-6">Interactive menu rating platform</h4>
        <h6 className="flex-column text-center">
          Use our search platform to find the best of the best food near you or
          login to scan a menu or upvote items yourself!
        </h6>
      </div>

      <Search handleSubmission={handleSubmission} />

      <FoodItemcontainer data={foods} />
    </div>
  );
}

export default Home;
