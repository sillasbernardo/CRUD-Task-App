import React from "react";

import './Task.css';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
	return (
		<div className="task-container">
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<div className="action-btn">
				<FontAwesomeIcon className="edit" icon={faPenToSquare} />
				<FontAwesomeIcon className="delete" icon={faTrash} />
			</div>
		</div>
	)
}

export default Task;