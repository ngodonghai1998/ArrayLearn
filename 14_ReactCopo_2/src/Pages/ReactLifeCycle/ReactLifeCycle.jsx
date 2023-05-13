import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
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
                <Child like={this.state.like}/>

                <i onClick={()=> {
                    this.setState({
                        like: this.state.like + 1,
                    })
                }} className='fa fa-heart text-danger  display-4' style={{cursor:'pointer'}}></i>
            </div>
        )
    }

    componentDidMount() {
		console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
}
