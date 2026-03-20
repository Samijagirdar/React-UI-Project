import React from "react";
import RightCardContent from "./RightCardContent";

const RightCards = (props) => {
  return (
    <div className="h-full shrink-0 w-80 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="No Image"
      />
      <RightCardContent tag={props.tag} id={props.id} />
    </div>
  );
};

export default RightCards;
