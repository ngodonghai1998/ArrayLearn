import React, { useState } from 'react'
import HOCModel from '../HOC/HOCModel'
import Login from './Login'
import Home from '../Props/Home';
import HomePage from './ReduxDemo/ShopDemo/HomePage';
import ContainerModel from '../HOC/ContainerModel';
import { useDispatch } from 'react-redux';
import { setModalAction, setModelAction } from '../redux/reducers/modelReducer';

/*
    HOC: Higher order component
    Nghĩa là component chức 1 component khác để tạo ra component mới chứa logic của component đó.
    Ví dụ: Modal thông tin lớp học, Modal thông tin lộ trình.
*/

//Tạo ra 1 component log in chứa modal. Component phải viết hoa.

// const LoginModel = new HOCModel(Login);
// const RegisterModel = new HOCModel(Register);
const HomeModel = new HOCModel(HomePage);

export default function DemoHOC() {

    const [component, setComponent] = useState(<Login />);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            {/* <HomeModel/> */}

            <button onClick={() => {
                // setComponent(<Login />)
                const action = setModelAction(<Login/>);
                dispatch(action);
            }} className='btn btn-primary mx-2' data-bs-toggle="modal" data-bs-target="#modalId">Login</button>

            <button onClick={() => {
                // setComponent(<Login />)
                const action = setModelAction(<Login/>);
                dispatch(action);
            }} className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#modalId">Register</button>

            <button onClick={() => {
                // setComponent(<HomePage />)
                const action = setModelAction(<HomePage/>);
                dispatch(action);
            }} className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#modalId">Home</button>

            {/* <ContainerModel component={component} /> */}
        </div>
    )
}
