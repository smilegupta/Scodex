import React from "react";

const card = () => {
  return (
    <div
      className="has-text-weight-semibold"
      style={{
        borderRadius: "30px",
        backgroundColor: "white",
        width: "220px",
        padding: "10px",
      }}
    >
      <div class="has-text-centered">
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png"
          alt="logo"
          height="50px"
          width="50px"
        />
        <p class="is-size-5">
          {" "}
          <a href="google" target="_blank" rel="noopener noreferrer">
            {" "}
            GeeksforGeeks{" "}
          </a>
        </p>
        <br />
      </div>
    </div>
  );
};

export default card;
