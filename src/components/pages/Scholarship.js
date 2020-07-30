import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card";

const Scholarship = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("./scholarships.json")
      .then((res) => {
        setData(res.data.scholarships);
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

export default Scholarship;
