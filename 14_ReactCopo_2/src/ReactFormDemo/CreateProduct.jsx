import React, { Component } from 'react'

export default class CreateProduct extends Component {

    state = {
        values: {
            idProduct: '',
            name: '',
            price: '',
            img: '',
            type: 'phone',
            desc: '',
        },
        errors: {
            idProduct: '(*)',
            name: '(*)',
            price: '(*)',
            img: '(*)',
            desc: '(*)',
        },

    }

    handleSubmit = (e) => {
        e.preventDefault();
        //Kiểm tra nếu this.state.values hợp lệ thì mới adđProduct
        //Duyệt this.state.errors
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                alert('Dữ liệu nhập chưa hợp lệ');
                return;
            }
        }

        //Call api ...
        let {addProduct} = this.props;
        //Validation trước thêm vào

        addProduct(this.state.values);
    };

    handleChangeInput = (e) => {
        let { value, id } = e.target; //e.target chính là thẻ input đang diễn ra sự kiện onInput
        let dataType = e.target.getAttribute('data-type');
        let minlength = e.target.getAttribute('data-minlength');
        let maxlength = e.target.getAttribute('data-maxlength');

        //Xử lý this.state.values
        let newValue = {...this.state.values};
        newValue[id] = value;

        //Xử lý errors
        let newError = {...this.state.errors};
        let messError = '';
        if (value.trim() === '') {
            messError = id + ' không được bỏ trống!'
        }else {
            if (dataType) {
                switch(dataType) {
                    case 'number': {
                        let regexNumber = /^\d+$/;
                        if (!regexNumber.test(value)) {
                            messError = id + ' phải là số !';
                        };
                        break;
                    }
                    case 'string': {
                        let regexNumber = /^[a-z A-Z0-9]+$/;
                        if (!regexNumber.test(value)) {
                            messError = id + ' phải là ký tự !';
                        };
                        break;
                    }
                }
            }
        }
        newError[id] = messError;

        //Cập nhật lại state của cả values và errors sau khi xử lý.
        this.setState({
            values: newValue,
            errors: newError,
        }, () => {
            console.log(this.state);
        })
    }

    render() {

        let {idProduct, name, price, img, type, desc} = this.props.productEdit;

        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>Product Info</div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Id</p>
                                <input data-type='number' className='form-control' id='idProduct' name='idProduct' onInput={this.handleChangeInput} value={idProduct} />
                                <p className='text text-danger' >{this.state.errors.idProduct}</p>
                            </div>

                            <div className='form-group'>
                                <p>name</p>
                                <input data-type='string' className='form-control' id='name' name='name' onInput={this.handleChangeInput} value={name}/>
                                <p className='text text-danger' >{this.state.errors.name}</p>
                            </div>

                            <div className='form-group'>
                                <p>price</p>
                                <input data-type='number' className='form-control' id='price' name='price' onInput={this.handleChangeInput} value={price}/>
                                <p className='text text-danger' >{this.state.errors.price}</p>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>img</p>
                                <input className='form-control' id='img' name='img' onInput={this.handleChangeInput} value={img}/>
                                <p className='text text-danger' >{this.state.errors.img}</p>
                            </div>

                            <div className='form-group'>
                                <p>type</p>
                                <select className='form-control' id='type' name='type' onInput={this.handleChangeInput} value={type}>
                                    <option value="phone">Phone</option>
                                    <option value="tablet">Tablet</option>
                                    <option value="laptop">Laptop</option>
                                </select>
                            </div>

                            <div className='form-group'>
                                <p>desc</p>
                                <input data-minlength='6' data-maxlength='32' className='form-control' id='desc' name='desc' onInput={this.handleChangeInput} value={desc}/>
                                <p className='text text-danger' >{this.state.errors.desc}</p>
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
