import React from "react";

export default function Item({ card }) {
  return (
    <div className="card">
      <div>{card.name}</div>
      <div className="text--description" id="description">{card.phone}</div>
      <div>{card.email}</div>
    </div>
  );
}
