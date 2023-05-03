import React, { Component } from 'react'

export default class Post extends Component {
    render() {

        //Lấy ra giá trị các object truyền vào thuộc tính info
        // This.props.children là prop đặc biệt dùng để hiển thị nội dung innerHTML của thẻ <Component/>.

        let {info, desc, children, TheBaiTap} = this.props;

        return (
            <div className='bg-dark p-3 text-white mt-2 shadow'>
                <h3>{info.tieuDe}</h3>
                <p>{info.noiDung}</p>
                {children}
                
                <TheBaiTap/>
            </div>
        )
    }
}

//ReactElement: <Thẻ />
//ReactComponent: import Component from '..'
