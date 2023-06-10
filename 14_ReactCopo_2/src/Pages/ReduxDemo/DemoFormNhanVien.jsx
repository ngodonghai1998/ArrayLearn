import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormNhanVien from './FormNhanVien'
import Info from './Info'


//Bỏ export, giữ lại export default
class DemoFormNhanVien extends Component {
    render() {
        return (
            <div className='container'>
                <h3>Demo form nhân viên</h3>
                <div className='row'>
                    <div className='col-6'>
                        <FormNhanVien />
                    </div>
                    <div className='col-6'>
                        <Info />
                    </div>
                    <div className='col-6'></div>

                </div>
            </div>
        )
    }
}

//Cách viết 1:
// const mapStateToProps = (state) => ({
//     return state;
// })

//Cách viết 2:
const mapStateToProps = (state) => state


export default connect(mapStateToProps)(DemoFormNhanVien)