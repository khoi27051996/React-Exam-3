import React, { useState } from 'react'
import shoesData from './data.json'
import ShoesItems from './ShoesItems'
import ShoesDetail from './ShoesDetail'
import Cart from './Cart'
const ShopShoes = () => {

    const [cart, setCart] = useState(shoesData[0])


    const handleCart = (v) => {
        setCart(v)
    }

    const [carts, setCarts] = useState([])
    const handleCarts = (v) => {
        setCarts((curren) => {
            const index = curren.findIndex((e) => e.id == v.id)
            if (index != -1) {
                curren[index].cartQuantity++
            } else {
                curren.push({ ...v, cartQuantity: 1 })
            }
            return [...carts]
        })
    }

    const handleUpDown = (v, quantity) => {
        setCarts((curren) => {
            const index = curren.findIndex((e) => e.id == v.id)
            if (index != -1) {
                curren[index].cartQuantity = (curren[index].cartQuantity += quantity) || 1
            }
            return [...carts]
        })
    }
    const handleDel = (v) => {
        setCarts((curren) => {
            return curren.filter((e) => e.id != v.id)
        })
    }
    return (
        <div>
            <h1>Welcome Shoes Shop</h1>
            <div className="container">
                <div className="cart text-right">
                    <div className="button">
                        <button className='btn btn-success' style={{ width: 50, height: 50, fontSize: 20 }} data-toggle="modal" data-target="#cartModal">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                    <div style={{ position: 'absolute', top: 65, right: 95 }}>
                        <span className='counter' style={{ color: 'red' }}>{ }</span>
                    </div>
                </div>
                <div className="row">
                    {
                        shoesData.map((v) => {
                            return (
                                <ShoesItems v={v} handleCart={handleCart} handleCarts={handleCarts} />
                            )
                        })
                    }
                </div>
            </div>
            <ShoesDetail cart={cart} />
            <Cart carts={carts} handleUpDown={handleUpDown} handleDel={handleDel} />
        </div>
    )
}

export default ShopShoes
