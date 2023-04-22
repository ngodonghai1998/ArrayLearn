//import các thư viện react
import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoState from './Components/State/DemoState';
// import DataBinding from './Components/DataBinding/DataBinding';
// import HandleEvent from './Components/HandleEvent/HandleEvent';
// import DemoLogin from './Components/State/DemoLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Nội dung toàn bộ website sẽ được chứa trong hàm render.
root.render(
	<div>
		{/* <Home /> */}
		{/* <DataBinding/> */}
		{/* <HandleEvent/> */}
		{/* <DemoLogin/> */}
		<DemoState />
	</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
