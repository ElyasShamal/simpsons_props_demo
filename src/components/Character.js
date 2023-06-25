import React from "react";
import Quote from "./Quote";

function Character({ name, image, quote }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Quote quote={quote[0]} />
      <Quote quote={quote[1]} />
      <Quote quote={quote[2]} />
    </div>
  );
}

export default Character;
