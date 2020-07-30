import React from "react";

const card = () => {
  return (
    <div>
      <div class="card " style={{ borderRadius: "30px", boxShadow: "none", backgroundColor:"pink"}}>
        <div class="card-content">
          <p class="title has-text-white">
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default card;
