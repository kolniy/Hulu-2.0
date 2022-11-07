import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ requests }) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid 
    md:grid-cols-2 
    xl:grid-cols-3 
    3xl:grid-cols-4"
    >
      {requests.map((request) => (
        <Thumbnail key={request.id} result={request} />
      ))}
    </FlipMove>
  );
};

export default Results;
