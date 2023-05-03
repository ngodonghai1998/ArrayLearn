import React, { Component } from 'react'
import { arrProduct } from '../../assets/data/data'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Product list</h3>
                <div className='row'>
                    <div className='col-4 mt-2'>
                        <ProductItem />
                    </div>

                    <div className='col-4 mt-2'>
                        <ProductItem />
                    </div>

                    <div className='col-4 mt-2'>
                        <ProductItem />
                    </div>
                </div>
            </div>
        )
    }
}
