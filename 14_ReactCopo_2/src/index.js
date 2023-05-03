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
		<ProductList />
	</div>
);

