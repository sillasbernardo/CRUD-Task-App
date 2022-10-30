import React from "react";

import './Elements.css';

const Elements = (props) => {

	// Send button onClick
	const onClickHandle = () => {
		props.onElementHandle()
	}

	if (props.type === 'label'){
		return <label className="label">{props.name}</label>
	} else if (props.type === 'input'){
		return <input 
				ref={props.inputRef}
				className="input"
				type={props.inputType} 
				name={props.name}/>
	} else if (props.type === 'textarea') {
		return <textarea
				ref={props.inputRef}
				className="textarea" name={props.name} 
				rows={props.rows} 
				cols={props.cols} />
	} else if (props.type === 'button'){
		return <button
				type="button"
				onClick={onClickHandle}
				className={props.className ? `${props.className}` : `button`}>{props.name}</button>
	} else {

	}
}

export default Elements;