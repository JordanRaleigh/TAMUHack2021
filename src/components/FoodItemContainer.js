import { type } from "jquery";
import React, { useState, useEffect } from "react";

import Client from "../Client";

const FoodItem = (props) => {
  //add use state to show if its upvoted
  const [upvoted, setupvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(props.upvotes);

  const checkVoted = async () => {
    let upvoted = await Client.upvoted(props._id);
    typeof upvoted == "boolean" && setupvoted(upvoted);
  };

  useEffect(() => {
    checkVoted();
  }, []);

  const upvoteHandler = () => {
    Client.upvote(props._id, (i) => {
      setupvoted((x) => !x);
      setUpvotes((x) => x + i);
    });
  };

  return (
    <div className="col-lg-3 foodItem m-2 justify-content-center align-items-center p-4 ">
      <div className="row">
        <div className="col-8">
          <h4 className="foodItem-name">{props.name}</h4>
          <p className="foodItem-description">{props.description}</p>
          <div className="foodItem-restaurant">
            <i class="fas fa-store mx-3"></i>
            {props.restaurant}
          </div>
        </div>
        <div className="col-2">
          <i
            class={`far fa-grin-hearts upvoteButton ${
              upvoted && "upvoteActive"
            }`}
            onClick={upvoteHandler}
          >
            <span className="m-2">{upvotes}</span>
          </i>
          {/* <i
            class={`far fa-frown-open downvoteButton ${
              false && "downvoteActive"
            }`}
          >
            <span className="m-2">{props.downvotes}</span>
          </i> */}
        </div>
      </div>
    </div>
  );
};

const FoodItemcontainer = (props) => {
  const { data } = props;

  return (
    <div {...props} className="row m-auto w-100 justify-content-center">
      {data.map((food, i) => {
        return <FoodItem {...food} />;
      })}
    </div>
  );
};

export default FoodItemcontainer;
