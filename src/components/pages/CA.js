import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card";

const CA = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("./ca.json")
      .then((res) => {
        setData(res.data.ca);
      })
      .catch((err) => console.log(err.data));
  }, []);

  return (
    <div className="columns is-multiline">
      {data &&
        data.map((elem) => {
          return (
            <div className="column is-3" key={elem.name}>
              <Card data={{ elem }} />
            </div>
          );
        })}
    </div>
  );
};

export default CA;
