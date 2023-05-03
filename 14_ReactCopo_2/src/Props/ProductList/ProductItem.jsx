import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className='card'>
                <img src='https://picsum.photos/200/200' alt='...' />
                <div className='card-body'>
                    <h3>Name</h3>
                    <p>Price</p>
                    <button className='btn btn-dark'>
                        Add to cart <i className='fa fa-cart'></i>
                    </button>
                </div>
            </div>
        )
    }
}
