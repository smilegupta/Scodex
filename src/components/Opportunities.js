import React from "react";
import Card from "./card";

const Opportunities = () => {
  return (
    <section
      className="hero is-medium is-bold is-centered"
      style={{ height: "100%", backgroundColor: "white", paddingTop: "64px" }}
      id="opportunties"
    >
      <div className="container has-text-centered">
        <h1 className="title" id="contact">
          Are you looking for some Opportunities? 🤨
        </h1>
        <h2 className="subtitle has-text-weight-semibold">
          Here you can check the different Opportunities and grab them!
        </h2>
      </div>
      
      <div className="columns is-centered has-text-centered is-multiline" style={{padding: "32px"}}>
      <div className="column is-3">
          </div>
          <div className="column is-3">
          <Card />
          </div>
          <div className="column is-3">
          <Card />
          </div>
          <div className="column is-3">
          </div>
          <div className="column is-3">
          </div>
          <div className="column is-3">
          <Card />
          </div>
          <div className="column is-3">
          <Card />
          </div>
          <div className="column is-3">
          </div>
       
      </div>
     
    </section>
  );
};

export default Opportunities;
