import React from "react";

function Character({ image, name }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
    </div>
  );
}

export default Character;
