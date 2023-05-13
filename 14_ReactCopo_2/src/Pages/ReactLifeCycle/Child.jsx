import React, { Component } from 'react'

export default class Child extends Component {

	constructor(props) {
        super(props);
        this.state = {

        }

        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');
        return null;
    }

	shouldComponentUpdate() {
        return false;
    }

	render() {
        console.log('render child');
		let {like} =this.props;

		return (
			<div className='bg-dark text-white p-3 display-4 mt-2'>
				Child: render
				<br/>
				Render 20 component con
				<br/>
				{like} <i className='fa fa-heart text-white'></i>
			</div>
		)
	}

	componentDidMount() {
		console.log('componentDidMount child');
    }

	componentDidUpdate() {
        console.log('componentDidUpdate child');
    }
}
