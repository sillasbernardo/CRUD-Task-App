import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import './Homepage.css';
import { getTask, postTask } from "../Components/APIHandler/APIHandler";
import Task from "../Components/Task/Task";
import New_task from "../Components/New_task/New_task";
import Header_panel from "../Components/Header_panel/Header_panel";
import OutsideClick from "../Components/OutsideClick/OutsideClick";

const Homepage = () => {

	// GET DATA
	const [taskData, setTaskData] = useState([]);
	useEffect(() => {
		// Call API Handler to load tasks from json
		getTask(setTaskData);
	})

	// Open and close "New task" modal window
	const [newTaskIsOpen, setNewTaskIsOpen] = useState(false);
	const handleNewTaskIsOpen = () => {
		setNewTaskIsOpen(true);
	}

	const handleNewTaskIsClose = () => {
		setNewTaskIsOpen(false);
	}

	return (
		<div className="homepage-container">
			<OutsideClick onOusideClick={handleNewTaskIsClose}>
				{newTaskIsOpen && <New_task 
					handleNewTaskIsClose={handleNewTaskIsClose} />
				}
			</OutsideClick>
			<div>
				<Header_panel handleNewTaskIsOpen={handleNewTaskIsOpen} postTask={postTask} />
					<div className="content-area">
						{
							taskData.map(element => <Task key={element.id} title={element.title} description={element.description}/>)
						}
					</div>
			</div>
		</div>
	)
}

export default Homepage;