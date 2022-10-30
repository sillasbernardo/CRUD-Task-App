import React, { useEffect, useRef, useState } from "react";

import './New_task.scss';
import Elements from "../Elements/Elements";
import { postTask } from "../APIHandler/APIHandler";

const New_task = (props) => {

	// Save form data
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const idTag = Date.now() + Math.random();

	const onElementHandle = (type) => {
		switch (type){
			case "close":
				props.onHandleNewModal(false);
				break;
			case "add":
				postTask(
					idTag,
					titleRef.current.value,
					descriptionRef.current.value
				)
				break;
			default:
				return
		}
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
					onElementHandle={(e) => onElementHandle("close")} 
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
				<Elements type="button" onElementHandle={(e) => onElementHandle("add")} name='Add'/>
			</div>
		</form>
	)
}

export default New_task;