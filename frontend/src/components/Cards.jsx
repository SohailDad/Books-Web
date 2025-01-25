import React from 'react'

function Cards(props) {
    
    return (
        <>
        <div className='mt-4 my-4 p-3'>
            <div className="card bg-base-100 w-92 shadow-xl">
                <figure>
                    <img
                        src={props.item.image}
                        alt="Books" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.item.name}
                        <div className="badge badge-secondary">{props.item.category}</div>
                    </h2>
                    <p>{props.item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{props.item.price}</div>
                        <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer duration-300">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards