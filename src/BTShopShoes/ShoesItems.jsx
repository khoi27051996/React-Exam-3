import React from 'react'

const ShoesItems = ({ v, handleCart, handleCarts }) => {
    return (
        <div className="col-3 mt-3" key={v.id}>
            <div className="card">
                <img className='img-fluid' src={v.image} alt="..." />
                <div className="card-body">
                    <h5 style={{ fontSize: 15, fontWeight: 'bold' }}>{v.name}</h5>
                    <p>Price: {v.price}$</p>
                    <div className="button d-flex justify-content-between">
                        <button className='btn btn-primary' onClick={()=>{
                            handleCarts(v)
                        }}>Add to cart</button>
                        <button data-toggle="modal" data-target="#exampleModal" className='btn btn-outline-danger' onClick={()=>{
                            handleCart(v)
                        }}>Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoesItems
