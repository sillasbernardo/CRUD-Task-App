import React from "react";
import ReactDOM from "react-dom/client"
import App from "./app";

import './Components/Fonts/Roboto/Roboto-Bold.ttf';
import './Components/Fonts/Roboto/Roboto-Regular.ttf';
import './Components/Fonts/Roboto/Roboto-Light.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)