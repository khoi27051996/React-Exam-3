import React, { useState } from 'react'

const Cart = ({ carts, handleUpDown, handleDel }) => {
    let price = 0
    let total = 0
    for (let i = 0; i < carts.length; i++) {
        let sp = carts[i]
        price = sp.price * sp.cartQuantity
        total += price
    }
    const handleTotal = () => {
        alert('Tổng tiền của bạn hết : ' + total + '$')
    }
    return (
        <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title" id="exampleModalLabel">Giỏ hàng</h1>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table className='table'>
                            <thead >
                                <tr>
                                    <td>Tên</td>
                                    <td>Giá</td>
                                    <td>Ảnh</td>
                                    <td>Số lượng</td>
                                    <td>Tổng Tiền</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts.map((v) => {
                                        return (
                                            <tr key={v.id}>
                                                <td>{v.name}</td>
                                                <td>{v.price} $</td>
                                                <td>
                                                    <img style={{ width: 100, height: 100 }} className='img-fluid' src={v.image} alt="..." />
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        handleUpDown(v, -1)
                                                    }}>-</button>
                                                    <span>{v.cartQuantity}</span>
                                                    <button className='btn btn-success' onClick={() => {
                                                        handleUpDown(v, 1)
                                                    }}>+</button>
                                                </td>
                                                <td>
                                                    {v.cartQuantity * v.price} $
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        handleDel(v)
                                                    }}>X</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={() => {
                            handleTotal()
                        }}>Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart
