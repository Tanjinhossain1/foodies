import React from 'react'

function index({ food }) {
  // const { name, img } = food;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        {/* <figure><img src={img} alt="Shoes" /></figure> */}
        <div className="card-body">
          {/* <h2 className="card-title">{name}</h2> */}
          <p>If a dog chews shoes whose shoes does he choose?</p>

        </div>
      </div>
    </div>
  )
}

export default index