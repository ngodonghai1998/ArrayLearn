import React, { Component } from 'react'

//Bước 01: Dàn layout
//Bước 02: state => font-size: number
//Bước 03: Đưa state lên giao diện
//Bưới 04: Thay đổi state


export default class DemoChangeFontSize extends Component {

	state = {
		fSize: 25,
	}
	render() {
		return (
			<div className='container'>
				<h3>Bài tập tăng giảm font-size</h3>
				<p style={{fontSize: `${this.state.fSize}px`}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cupiditate doloribus nulla deleniti amet. Qui non tempore aspernatur incidunt quo?</p>
			
				<button className='btn btn-success' mx-2 onClick={() => {
					this.setState({
						fSize: this.state.fSize + 2,
					})
				}}>+</button>
				<button className='btn btn-success' mx-2 onClick={() => {
					this.setState({
						fSize: this.state.fSize - 2,
					})
				}}>-</button>
			</div>
			
		)
	}
}
