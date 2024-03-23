import React from "react";
import FilterBTN from "./FilterBTN";

const Status = () => {
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Status
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <FilterBTN/>
      </div>
    </div>
  </div>
  )
}

export default Status
