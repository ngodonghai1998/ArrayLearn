//import các thư viện react
import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleDemo from './StyleDemo/StyleDemo';
import DemoState from './Components/State/DemoState';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DataBinding from './Components/DataBinding/DataBinding';
import HandleEvent from './Components/HandleEvent/HandleEvent';
import DemoLogin from './Components/State/DemoLogin';
import DemoPageLogin from './Components/State/DemoPageLogin';
import './assets/scss/index.scss';
import DemoProps from './Props/DemoProps';
import ProductList from './Props/ProductList/ProductList';
import ProductDetail from './Props/ProductDetail/ProductDetail';
//Cấu hình react router dom
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './Props/Home';
import HomeTemplate from './Templates/HomeTemplate';
import BaiTapChonXe from './Components/State/BaiTapChonXe';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ReactFormDemo from './ReactFormDemo/ReactFormDemo';
import ReactLifeCycle from './Pages/ReactLifeCycle/ReactLifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Nội dung toàn bộ website sẽ được chứa trong hàm render.
root.render(
	<div>
		
		{/* <Home /> */}
		{/* <DataBinding/> */}
		{/* <HandleEvent/> */}
		{/* <DemoLogin/> */}
		{/* <DemoState /> */}
		{/* <StyleDemo /> */}
		{/* <RenderWithMap /> */}
		{/* <DemoPageLogin /> */}
		{/* <DemoProps />  */}
		{/* <ProductList /> */}
		{/* <ProductDetail /> */}
		
		
		<BrowserRouter>
			<Routes>
				{/* <Route path='' element={<Home />}></Route>
				<Route path='home' element={<Home />}></Route>
				<Route path='cart' element={<ProductDetail />}></Route> */}

				<Route path='' element={<HomeTemplate />}>
					<Route index element={<Home />}></Route>
					<Route path='cart' element={<ProductDetail />}></Route>
					<Route path='cars' element={<BaiTapChonXe />}></Route>
					<Route path='login' element={<Login />}></Route>
					<Route path='profile' element={<Profile />}></Route>
					<Route path='react-form' element={<ReactFormDemo />}></Route>
					<Route path='react-lifecycle' element={<ReactLifeCycle />}></Route>
					<Route path='*' element={<Navigate to={'/'} />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	
	
	</div>
);

