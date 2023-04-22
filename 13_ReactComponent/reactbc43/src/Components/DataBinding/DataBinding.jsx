import React, { Component } from 'react';

const TITLE = 'Cybersoft';

const renderInfo = (name, age) => {

    return <span>
        {`Xinh chào ${name} - ${age} tuổi`}
    </span>

}

export default class DataBinding extends Component {

    user = {
        username: 'Khai',
        password: 123,

    }

    //Nội dung trả về trong jsx là primitive value (string, boolean, number, jsx, ...)
    render() {
        return (
            <div className='container'>
                <h3 id='title'>{TITLE}</h3>
                <p>{renderInfo('Hai', 25)}</p>

                <div className='card w-25'>
                    <h3 className='card-header text-center bg-dark text-white'>User info</h3>
                    <div className='card-body'>
                        <p>Username</p>
                        <input className='form-control' value={this.user.username} />
                        <p>Password</p>
                        <input className='form-control' type='password' value={this.user.password} />
                    </div>

                </div>
            </div>
        )
    }
}
