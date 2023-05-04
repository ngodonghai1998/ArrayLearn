import React, { Component } from 'react'
import { arrProduct } from '../../assets/data/data'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProduct = () => {
        let arrJSX = arrProduct.map((item) => {
            return <div className='col-4 mt-2' key = {item.id}>
                <ProductItem prodInfo = {item}/>
            </div>
        });

        return arrJSX;
    }

    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Product list</h3>
                <div className='row'>

                    {this.renderProduct()}

                    {/* Khi thấy sự lặp đi lặp lại giống như bên dưới, thì ta sử dụng cấu trúc map cho sự lặp lại này. */}
                    {/* <div className='col-4 mt-2'>
                        <ProductItem />
                    </div>

                    <div className='col-4 mt-2'>
                        <ProductItem />
                    </div>

                    <div className='col-4 mt-2'>
                        <ProductItem />
                    </div> */}
                </div>
            </div>
        )
    }
}
