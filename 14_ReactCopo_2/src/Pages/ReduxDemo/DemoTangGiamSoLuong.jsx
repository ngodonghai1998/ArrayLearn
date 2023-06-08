import React, { Component } from 'react';
import { store } from '../../redux/configStore';
import { connect  } from 'react-redux'

class DemoTangGiamSoLuong extends Component {
    render() {
        return (
            <div className='container'>
                {/* Từ redux, gọi ra các đối tượng trong store */}
                {/* <h1>Number : {store.getState().number}</h1> */}
                <h1>Number : {this.props.number}</h1>
                <button className='btn btn-dark mx-2' onClick={() => {
                    //action là dữ liệu gửi lên redux store
                    const action = {
                        type: 'TANG_GIAM_SO_LUONG', //gán id cho một object, number hay string, array ở type.
                        //Gán dữ liệu truyền đi là payload
                        payload: 1,
                    };
                    //Dùng phương thức dispatch để gửi dữ liệu lên redux.
                    store.dispatch(action);
                }}>+</button>
                <button className='btn btn-dark mx-2'>-</button>
            </div>
        )
    }
}


//Hàm lấy state từ redux về và biến this.props của component
const mapStateToProps = (state) => {

    return {
        number: state.number,
    };
}

const ComponentWithRedux = connect(mapStateToProps)(DemoTangGiamSoLuong);

export default ComponentWithRedux;