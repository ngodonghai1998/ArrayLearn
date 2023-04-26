import React, { Component } from 'react'

export default class Post extends Component {
    render() {

        //Lấy ra giá trị các object truyền vào thuộc tính info
        let {info} = this.props;

        return (
            <div className='bg-dark p-3 text-white mt-2 shadow'>
                <h3>{info.tieuDe}</h3>
                <p>{info.noiDung}</p>
            </div>
        )
    }
}
