import React, { useState } from 'react';

const FoodItem = (props) => {
  //add use state to show if its upvoted
  const [votes, setVotes] = useState(0);
  const handleSumbit = () => {
    //api logic stufff
    console.log(votes);
  };
  return (
    <div className="">
      <div>Name : {props.name}</div>
      <div>Restaurant : {props.restaurant}</div>
      <div>Upvotes : {props.upvotes}</div>
      <div>Downvotes : {props.downvotes}</div>
      <button
        onClick={() => {
          setVotes(1);
          handleSumbit();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setVotes(-1);
          handleSumbit();
        }}
      >
        -
      </button>
    </div>
  );
};

const FoodItemcontainer = (props) => {
  const { data } = props;

  return (
    <div {...props}>
      {data.map((food, i) => {
        return <FoodItem {...food} />;
      })}
    </div>
  );
};

export default FoodItemcontainer;
