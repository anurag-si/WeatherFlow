import React from "react";

import "./Card2.css";

const Card2 = ({ data, count, setCount, setCity }) => {
  const handleSubmit = (e) => {
    setCount(0);
  };

  return (
    <div className="container2">
      <div className="card2">
        <button className="btn2" onClick={handleSubmit}>
          Check Again
        </button>
        <div className="cityname">
          <h1>
            <b>{data.name}</b>
          </h1>
        </div>
        <div className="temp">
          {data.main ? <h4> {data.main.temp}</h4> : null}
        </div>
        <div className="type">
          {data.weather ? <h4>{data.weather[0].main}</h4> : null}
        </div>
        <div className="country">
          {data.sys ? <h4>{data.sys.country}</h4> : null}
        </div>
        {/* <button >hiuh</button>
        <button>uidib</button>
        <article>
          fius
        </article>
        <button>binjcdks</button>
        <p className="p">
          gnskld s
        </p> */}
      </div>
    </div>
  );
};

export default Card2;
