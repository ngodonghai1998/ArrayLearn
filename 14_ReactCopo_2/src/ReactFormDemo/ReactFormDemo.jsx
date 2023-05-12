import React, { Component } from 'react'
import CreateProduct from './CreateProduct'

export default class ReactFormDemo extends Component {
    render() {
        return (
            <div className='container'>
                <CreateProduct />

                <table className='table mt-2'>
                    <thead className='bg-dark text-white fw-bold'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>img</th>
                            <th>price</th>
                            <th>type</th>
                            <th>desc</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}
