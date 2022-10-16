import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import './Homepage.css';
import Task from "../Components/Task/Task";
import New_task from "../Components/New_task/New_task";
import Header_panel from "../Components/Header_panel/Header_panel";
import OutsideClick from "../Components/OutsideClick/OutsideClick";

const Homepage = () => {

	// GET DATA
	const [taskData, setTaskData] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:3002/api/tasks`)
			.then(res => {
				setTaskData(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	}, [])

	// POST DATA
/* 	const postTask = (taskId, taskTitle, taskDescription) => {

		console.log('works')

		console.log(taskId, taskTitle, taskDescription)

		axios.post('http://localhost:3002/api/task', {
			id: taskId,
			title: taskTitle,
			description: taskDescription
		})
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
	} */

	// DELETE DATA
	const deleteTask = taskId => {
		axios.delete(`data.json`)
	}

	// NEW TASK MODAL | OPEN - CLOSE
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
				<Header_panel handleNewTaskIsOpen={handleNewTaskIsOpen} />
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