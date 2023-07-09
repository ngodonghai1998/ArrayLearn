import React, { useEffect } from 'react';
import Product from '../../Components/Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/configStore';
import { ProductModel, getDataProductApi } from '../../Redux/reducers/productReducer';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

type Props = {}

export default function Home({ }: Props) {

	const { arrProduct } = useSelector((state: RootState) => state.productReducer);
	const dispatch: Dispatch = useDispatch();

	//Call api
	const getDataProductList = async () => {

		const actionApi:any = getDataProductApi();
		dispatch(actionApi)
	}

	useEffect(() => {
		getDataProductList();
	}, [])

	const renderProducts = (): JSX.Element[] => {
		return arrProduct.map((item:ProductModel, index) => {
			return (
				<div className='col-4' key={item.id}>
					<Product />
				</div>
			)
		})
	}


	return (
		<div className='container'>
			<h3>Shop</h3>
			<div className='row'>
				{renderProducts()}
			</div>
		</div>
	)
}