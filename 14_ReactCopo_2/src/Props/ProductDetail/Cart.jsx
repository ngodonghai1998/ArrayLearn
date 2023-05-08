import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        )
    }
}
