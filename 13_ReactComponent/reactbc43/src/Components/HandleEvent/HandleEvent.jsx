import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (event) => {
        // alert('Hello cybersoft');
        event.target.className = 'btn btn-danger'
    }

    render() {

        const handleEvent = (event) => {
            alert('Hello cybersoft');
        }

        return (
            <div className='container'>
                <h3>Handle event</h3>

                {/* Cách định nghĩa một function event cho 1 sự kiện của 1 nút xử lý */}
                
                {/* Cách 1 */}
                <button className='btn btn-success' onClick={(event) => {
                    alert('Hello cybersoft');
                }}>Click me</button>

                {/* Cách 2: Khi có nhiều nút cùng xử lý cùng thực hiện thì ta có thể khai báo function riêng tại biến hoặc thuộc. Không được để dấu đóng mở ngoặc, không là hàm sẽ thực hiện khi chạy, lúc bấm sẽ không còn tác dụng.  */}
                <button className='btn btn-success' onClick={this.handleClick}>Click me</button>
                
                {/* Cách 3 */}
                <button className='btn btn-success' onClick={handleEvent}>Click me</button>
            </div>
        )
    }
}
