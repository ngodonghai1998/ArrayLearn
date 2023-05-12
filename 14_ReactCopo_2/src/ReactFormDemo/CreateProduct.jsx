import React, { Component } from 'react'

export default class CreateProduct extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
    };
    
    render() {
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>Product Info</div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Id</p>
                                <input className='form-control' id='idProduct' name='idProduct' />
                            </div>

                            <div className='form-group'>
                                <p>name</p>
                                <input className='form-control' id='name' name='name' />
                            </div>

                            <div className='form-group'>
                                <p>price</p>
                                <input className='form-control' id='price' name='price' />
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>img</p>
                                <input className='form-control' id='img' name='img' />
                            </div>

                            <div className='form-group'>
                                <p>type</p>
                                <select className='form-control'>
                                    <option value="phone">Phone</option>
                                    <option value="tablet">Tablet</option>
                                    <option value="laptop">Laptop</option>
                                </select>
                            </div>

                            <div className='form-group'>
                                <p>desc</p>
                                <input className='form-control' id='desc' name='desc' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success' type='submit'>Create</button>
                </div>
            </form>
        )
    }
}
