//import các thư viện react
import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './Components/Demo.jsx';
import DemoClass from './Components/DemoClass.jsx';
import Home from './Components/HomeComponent/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Nội dung toàn bộ website sẽ được chứa trong hàm render.
root.render(
  <div>
    <Home/>
  </div>
);


