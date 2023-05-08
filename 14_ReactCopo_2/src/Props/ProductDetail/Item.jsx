import React, { Component } from 'react'

export default class Item extends Component {
    render() {

        //Lấy từ propName của component cha truyền vào
        let {phone, xemDetail, themGioHang} = this.props;

        return (
            <div className='card'>
                <img src={phone.hinhAnh} alt="..." height={'100%'} />
                <div className='card-body'>
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan.toLocaleString()} VND</p>
                    <button className='btn btn-success' onClick={() => {
                        xemDetail(phone);
                    }}>Xem chi tiết</button>

                    <button className='btn btn-dark mx-2' onClick={()=>{
                        themGioHang(phone);
                    }}><i classname='fa fa-cart-plus'></i>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
