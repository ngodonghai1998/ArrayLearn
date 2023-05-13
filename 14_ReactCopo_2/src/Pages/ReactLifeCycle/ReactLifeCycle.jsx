import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            obLike: {
                like: 1,
            },
        }

        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        console.log('render');
        return (
            <div className='container'>
                Component life cycle
                <h3>Number: {this.state.number}</h3>
                <button className='btn btn-success' onClick={()=>{
                    this.setState({
                        number: this. state.number + 1,
                    })
                }}>+</button>
                <Child obLike={this.state.obLike}/>

                <i onClick={()=> {
                    let newObLike = this.state.obLike;

                    newObLike.like +=1

                    this.setState({
                        obLike: {...newObLike}, //{...object} là phương thức tạo ra một object mới có giá trị bằng object cũ.
                    })
                }} className='fa fa-heart text-danger  display-4' style={{cursor:'pointer'}}></i>
            </div>
        )
    }

    timeout= {};

    componentDidMount() {
        this.timeout = setInterval(() => {
            console.log('server response');
        }, 1000);
        //Call api
		console.log('componentDidMount chỉ chạy một lần sau render');
    }

    componentDidUpdate(prevProps, prevState) {
		//Tuyệt đối không setState khi không có điệu kiện

        console.log('componentDidUpdate chạy sau render mỗi lần state hoặc props thay đổi.');
    }

    componentDidCatch(error, errorInfo) {
        //You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    componentWillUnmount() {
        //clear đi các hàm chạy ngầm của component trước khi component mất khỏi giao diện
        clearInterval(this.timeout);
    }
}
