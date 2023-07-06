import React from 'react';
import { Avatar, Badge, Space } from 'antd';
import { Outlet, NavLink } from 'react-router-dom';


export default function BottomTab() {
    return (
        <div className='bg-dark text-white p-3' style={{
            position:'fixed',
            bottom:0,
            left: 0,
            width:'100vw'
        }}>
            <div className='row text-center'>
                <div className='col-4'>
                    <NavLink to='/profile'>
                        <Badge count={99}>
                            <i className='fa fa-user fs-3 text-white'></i>
                        </Badge>
                    </NavLink>
                    <NavLink></NavLink>
                </div>

                <div className='col-4'>
                    <NavLink to='/home-page'>
                        <Badge count={95}>
                            <i className='fa fa-home fs-3 text-white'></i>
                        </Badge>
                    </NavLink>
                </div>

                <div className='col-4'>
                    <NavLink to={'/login'}>
                        <Badge count={99}>
                            <i className='fa fa-user-cog fs-3 text-white'></i>
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
