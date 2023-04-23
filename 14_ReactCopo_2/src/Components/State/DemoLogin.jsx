import React, { Component } from 'react'

export default class DemoLogin extends Component {


    //State: là thuộc tính của component để quản lý các biến thay đổi trên giao diện của một component.
    state = {
        result: 'Default value',
    }

    handleSubmit = (event) =>  {
        event.preventDefault();
        // alert('submit');
        // document.getElementById('result').innerHTML = 'Đăng nhập thành công';
        // this.state.result = 'Đăng nhập thành công' ==> Không được thay đổi state trực tiếp vì giao diện sẽ không render lại.

        let newState = {
            result: 'Đăng nhập thành công!'
        };

        // this.setState là phương thức có sẵn của component. Dùng để thay đổi giao diện giá trị state. Đồng thời làm giao diện render lại với giá trị state mới.
        this.setState(newState);
    }

    renderLogin = () => {

    }


    render() {
        return (
            <div className='container'>
                <form className="card w-25 mx-auto" onSubmit={this.handleSubmit}>
                    <div className='card-header bg-dark text-white text-center'>Login</div>
                    <div className='card-body'>
                        <p>Username</p>
                        <input className='form-control' id='username'/>
                        <p>Password</p>
                        <input className='form-control' id='password'/>
                    </div>
                    <div className='card-footer text-center'>
                        <button type='submit' className='btn btn-success'>Login</button>
                    </div>
                </form>
                <div className='alert alert-success mt-2 mx-auto w-25' id='result'>
                    {this.state.result}
                </div>
            </div>
        )
    }
}