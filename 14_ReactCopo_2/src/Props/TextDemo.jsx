import React, { Component } from 'react'

export default class TextDemo extends Component {
    render() {

        //this.props là thuộc tính của react class component dùng để nhận giá trị từ component cha truyền vào (thẻ sử dụng thẻ này)

        //props không thể gán lại bằng giá trị khác.

        let {img, name, price} = this.props;
        // let noiDung = this.props.noiDung;

        // this.props.name = 'xyz'; //Đây là giá trị lỗi do props chỉ được gán 1 lần duy nhất.
        return (
            <div className='card'>
                <img src={img} alt="..." />
                <div className='card-body'>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
            </div>
        )
    }
}
