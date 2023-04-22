//import các thư viện react
import React from 'react';
import ReactDOM from 'react-dom/client';
import DataBinding from './Component/DataBinding/DataBinding.jsx';
import HandleEvent from './Component/HandleEvent/HandleEvent.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Nội dung toàn bộ website sẽ được chứa trong hàm render.
root.render(
	<div>
		{/* <Home /> */}
		{/* <DataBinding/> */}
		<HandleEvent/>
	</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
