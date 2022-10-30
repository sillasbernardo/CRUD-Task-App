import React from "react";

import './Task.scss';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteTask } from "../APIHandler/APIHandler"

const Task = (props) => {

	return (
		<div className="task-container">
			<div className="title">
				<h3>{props.title}</h3>
			</div>
			<div className="description">
				<p>{props.description}</p>
			</div>
			<div className="action-btn">
				<FontAwesomeIcon onClick={() => {props.onHandlePutModal(true, props.id)}} className="edit" icon={faPenToSquare} />
				<FontAwesomeIcon onClick={() => {deleteTask(props.id)}} className="delete" icon={faTrash} />
			</div>
		</div>
	)
}

export default Task;