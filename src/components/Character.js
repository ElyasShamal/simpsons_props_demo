import React from "react";
import Quote from "./Quote";

function Character({ character }) {
  const { name, image, quotes } = character;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Quote quote={quotes[0]} />
      <Quote quote={quotes[1]} />
      <Quote quote={quotes[2]} />
    </div>
  );
}

export default Character;
