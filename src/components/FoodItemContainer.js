import React, { useState } from "react";

const FoodItem = (props) => {
  return (
    <div className="">
      <div>Name : {props.name}</div>
      <div>Restaurant : {props.restaurant}</div>
      <div>Upvotes : {props.upvotes}</div>
      <div>Downvotes : {props.downvotes}</div>
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
