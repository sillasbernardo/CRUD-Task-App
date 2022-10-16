import React, { useEffect, useRef, useState } from "react";

import './New_task.css';
import Elements from "../Elements/Elements";
import { postTask } from "../APIHandler/APIHandler";

const New_task = (props) => {

	// Save form data
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const idTag = Date.now() + Math.random();

	const handlePost = (event) => {
		event.preventDefault();
		postTask(
			idTag,
			titleRef.current.value,
			descriptionRef.current.value
		)
	}

	// Reposition new task modal when screen resizes
	const [formsContainerWidth, setFormsContainerWidth] = useState(null);
	useEffect(() => {
		setFormsContainerWidth(window.innerWidth - (70 / .18));
	}, [window.innerWidth])

	return (
		<form className="forms-container" style={{left: formsContainerWidth}}>
			<div className="heading">
				<h3>Add new task</h3>
				<Elements
					handleNewTaskIsClose={props.handleNewTaskIsClose} 
					type='button' 
					name='X' 
					className='close' />
			</div>
			<div className="title">
				<Elements type='label' name='Title' />
				<Elements
					inputRef={titleRef}
					type='input' 
					inputType='text' 
					name='title' />
			</div>
			<div className="description">
				<Elements type='label' name='Description' />
				<Elements
					inputRef={descriptionRef}
					type='textarea' 
					rows={4} 
					cols={30} 
					name='description' />
			</div>
			<div className="btn">
				<Elements type="button" postTask={(e) => handlePost(e)} name='Add'>Add</Elements>
			</div>
		</form>
	)
}

export default New_task;