import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Product({ }: Props) {
	return (
		<div className='card'>
			<img src='https://i.pravatar.cc?u=1' alt='...' />
			<div className='card-body'>
				<h3>Product name</h3>
				<p>Price</p>
				<NavLink to={`/detail/${1}`} className='btn btn-dark'>
					View detail
				</NavLink>
			</div>
		</div>
	)
}