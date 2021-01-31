import React from 'react';
import Search from '../components/Search';

function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center ">
      <Search />
      <h1>Welcome to FoodIt</h1>
      <h2>Interactive menu rating platform.</h2>
      <h3>
        Use our search platform to find the best of the best food near you. Our
        menu rating platform allows users to upvote and downvote items they've
        tried to allow other users to know exactly what the best items are on
        the menu and find the best food no matter where you are.
      </h3>
      <h3>
        Our platorm allows resturaunts to go digital, upload their menus, and
        let the users do the rest.
      </h3>
    </div>
  );
}

export default Home;
