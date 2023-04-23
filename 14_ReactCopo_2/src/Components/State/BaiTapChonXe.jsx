import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcCar: './img/products/black-car.jpg',
    }

    handleChangeColor = async (color) => {
        await this.setState({
            srcCar: `./img/products/${color}-car.jpg`,
        }, () => {
            console.log(this.state);
        });

    }

    render() {
        return (
            <div className='container'>
                <h3>Bài tập chọn xe</h3>
                <div className='row'>
                    <div className='col-6'>
                        <img src={this.state.srcCar} alt='no pictures' className='w-100' />
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-dark mx-2' onClick={
                            () => {
                                this.handleChangeColor('black')
                            }
                        }>Black car</button>
                        <button className='btn btn-danger mx-2' onClick={
                            () => {
                                this.handleChangeColor('red')
                            }
                        }>Red car</button>
                        <button className='btn btn-light mx-2' onClick={
                            () => {
                                this.handleChangeColor('steel')
                            }
                        }>Steel car</button>
                        <button className='btn btn-secondary mx-2' onClick={
                            () => {
                                this.handleChangeColor('silver')
                            }
                        }>Silver car</button>
                    </div>
                </div>
            </div>
        )
    }
}
