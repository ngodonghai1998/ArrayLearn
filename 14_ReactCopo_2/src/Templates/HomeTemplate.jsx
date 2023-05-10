import React, { Component } from 'react';

//Component này sẽ đại diện cho component được load trên url
import { Outlet } from 'react-router-dom';


export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <header className='header p-3 bg-dark text-white'>
                    <nav className='d-flex'>
                        <a href='/' className='text-white mx-2 nav-link'>Home</a>
                        <a href='/cart' className='text-white mx-2 nav-link'>Cart (Demo props)</a>
                    </nav>
                </header>

                <main style={{minHeight:'650px'}}>
                    <Outlet></Outlet>
                </main>

                <footer className='bg-dark text-white p-3 text-center'>
                    <h1>Footer</h1>
                </footer>
            </div>
        )
    }
}
