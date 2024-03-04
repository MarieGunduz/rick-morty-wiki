import React from 'react'

const Cards = ({ results }) => {

  let display;
  console.log(results);

  if (results) {
    display = results.map(result => {
      let { id, name, image } = result
      return <div key={id} className="col-4">
        <div className="">
          <img src={image} alt={name} className="img-fluid" />
          <div className="content">
            <div className="fs-4 fw-bold mb-4">{name}</div>
          </div>
        </div>
      </div>
    });
  } else {
    display = "No Characters Found :/";
  }

  return (
    <>{display}</>
  );
};

export default Cards; 
