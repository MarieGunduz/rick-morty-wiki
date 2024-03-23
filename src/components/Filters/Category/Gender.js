import React from 'react'

const Gender = () => {
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Gender
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"></div>
    </div>
  </div>
  )
}

export default Gender
