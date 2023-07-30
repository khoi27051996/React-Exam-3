import React from 'react'

const ShoesDetail = ({ cart }) => {

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="row">
                            <div className="col-3">
                                <img className='img-fluid' src={cart.image} alt="..." />
                            </div>
                            <div className="col-9 text-left">
                                <h1>Tên Giày : {cart.name}</h1>
                                <p>Giá giày : {cart.name}</p>
                                <p>Loại : {cart.alias}</p>
                                <p>Thông Tin : {cart.description}</p>
                                <h4>Giá : {cart.price} $</h4>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoesDetail
