import React, { Component } from 'react';

//Component này sẽ đại diện cho component được load trên url
import { Outlet, NavLink } from 'react-router-dom';
import CartPage from '../Pages/ReduxDemo/ShopDemo/CartPage';

//import thư viện connect from redux store
import { connect } from 'react-redux';
import ResponsiveTemplate from './ResponsiveTemplate';
import BottomTab from '../Components/BottomTab';

function Footer() {
    return (
    <footer className='bg-dark text-white p-3 text-center'>
        <h1>Footer</h1>
    </footer>
    )
}

class HomeTemplate extends Component {

    tinhTongTien = () => {
        let tongTien = 0;
        for (let itemCart of this.props.cart) {
            tongTien += itemCart.quantity * itemCart.price;
        }
        return tongTien;
    }

    render() {
        console.log('template testings', this.props);
        return (
            <div>
                {/* // Khi làm theo cách này, nhược điểm duy nhất khi gặp phải là thẻ a - thẻ liên kết dẫn đến đường link. Do đó, khi bấm tới ví dụ như Home hay cart thì nó phải load lại trang, không khi đó thì nội dung thay đổi chỉ có trong root, nên chỉ cần load lại trong root là đủ, vậy cần làm gì?
                // Cần dùng một thẻ khác, gọi là thẻ NavLink, NavLinksẽ giúp ta request đến Outlet mà không cần load lại toàn bộ trang. */}
                {/* Chuyển thẻ <a href=''></a> thành <NavLink to=''></NavLink> */}
                <header className='header p-3 bg-dark text-white vw-100'>
                    <nav className='d-flex'>
                        <div className='d-flex w-50'>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Home</NavLink>
                            <NavLink to='/cart' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Cart (Demo props)</NavLink>
                            <NavLink to='/cars' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Cars</NavLink>
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Login</NavLink>
                            <NavLink to='/react-form' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>React-form</NavLink>
                            <NavLink to='/react-lifecycle' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>React-lifecycle</NavLink>



                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item nav-link" to="/redux-demo1">Demo tăng giảm SL</NavLink>
                                    <NavLink className="dropdown-item nav-link" to="/redux-demo2">Demo chọn xe</NavLink>
                                    <NavLink className="dropdown-item nav-link" to="/redux-demo3">Demo Form nhân viên</NavLink>
                                </div>
                            </div>

                            <div className='nav-item'>
                                <NavLink className='nav-link' to='/antd'>AntD</NavLink>
                            </div>

                            <div className='nav-item'>
                                <NavLink className='nav-link' to='/hoc'>HOC</NavLink>
                            </div>
                        </div>

                        <div className='w-50 text-end'>
                            <NavLink className={"text-white"} to='cart-page' style={{ textDecoration: 'none' }}>
                                <i className='fa fa-cart-plus fs-3'></i> ({this.props.cart.length} - {this.tinhTongTien()} $)
                            </NavLink>
                        </div>
                    </nav>
                </header>

                <main style={{ minHeight: '650px' }}>
                    <Outlet></Outlet>
                </main>

                <ResponsiveTemplate component={Footer} mobileComponent={BottomTab}/>

            </div>
        )
    }
}



const mapStateToProps = (state) => state.cartReducer;

export default connect(mapStateToProps)(HomeTemplate);