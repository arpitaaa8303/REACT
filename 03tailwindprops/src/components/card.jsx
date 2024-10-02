import React from 'react'

function Card({username, btntxt="visit me"}){
    console.log(username);

    return(
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{username}!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">{btntxt}</button>
    </div>
  </div>
</div>
    )
}
export default Card