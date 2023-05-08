import React, { Component } from 'react'

export default class Cart extends Component {

    renderGioHang = () => {
        let { arrGioHang } = this.props;
        return arrGioHang.map((sp) => {
            return <tr key={sp.maSP}>
                <td>{sp.maSP}</td>
                <td>{sp.tenSP}</td>
                <td>
                    <img src={sp.hinhAnh} alt="..." width={'50px'} height={'50px'} />
                </td>
                <td>{sp.giaBan}</td>
                <td>
                    <button className='mx-2 btn btn-primary'>+</button>
                    {sp.soLuong}
                    <button className='mx-2 btn btn-primary'>-</button>
                </td>

                <td>{sp.giaBan * sp.soLuong}</td>
                <td>
                    <button className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        })
    }

    render() {

        let { arrGioHang } = this.props;

        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderGioHang()}
                </tbody>
            </table>
        )
    }
}
