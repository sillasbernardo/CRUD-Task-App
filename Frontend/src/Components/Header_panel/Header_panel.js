import React from "react";

import './Header_panel.css';

const Header_panel = (props) => {
	return (
		<div className="header-container">
			<div>
				<h1 className="header-title">TASK NOTES</h1>
			</div>
			<div className="header-btn">
				<button onClick={() => {props.onHandleNewModal(true)}}>New Task</button>
			</div>
		</div>
	)
}

export default Header_panel;