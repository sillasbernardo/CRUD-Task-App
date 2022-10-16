import React, { useRef } from "react";

import './Elements.css';

const Elements = (props) => {

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
	} else if (props.type === 'button' && props.handleNewTaskIsClose){
		return <button 
				onClick={props.handleNewTaskIsClose} 
				className={props.className ? `${props.className}` : `button`}>{props.name}</button>
	} else if (props.type === 'button' && props.postTask){
		return <button 
				onClick={props.postTask} 
				className={props.className ? `${props.className}` : `button`}>{props.name}</button>
	} else if (props.type === 'button') {
		return <button 
				onClick={e => {e.preventDefault()}} 
				className={props.className ? `${props.className}` : `button`}>{props.name}</button>
	} else {

	}
}

export default Elements;