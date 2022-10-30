import React, { useEffect, useReducer, useState } from "react";

import './Homepage.scss';
import { getTask } from "../Components/APIHandler/APIHandler";
import Task from "../Components/Task/Task";
import New_task from "../Components/New_task/New_task";
import Header_panel from "../Components/Header_panel/Header_panel";
import OutsideClick from "../Components/OutsideClick/OutsideClick";
import UpdateTaskModal from "../Components/UpdateTaskModal/UpdateTaskModal";


// Update modal useReducer
const putReducer = (state, action) => {
	switch(action.type){
		case "OPEN":
			return {
				putModal: true,
				task_id: action.payload
			}
			break;
		case "CLOSE":
			return {
				putModal: false,
				task_id: action.payload
			}
			break;
		default:
			return new Error();
	}
}

const Homepage = () => {

	// Load data from Json
	const [taskData, setTaskData] = useState([]);
	useEffect(() => {
		getTask(setTaskData);
		if (taskData.length > 0){
			setHasTask(true);
		} else (setHasTask(false))
	})

	// Handle new task modal
	const [newTaskModal, setNewTaskModal] = useState(false);
	const onHandleNewModal = (active) => {
		active ? setNewTaskModal(true) : setNewTaskModal(false);
	}

	// Handle update task modal
	/*
		Active: Sets modal true or false
		Id: Received from Task component to be passed to UpdateTaskModal
	*/
	const [putModalState, putModalDispatch] = useReducer(putReducer, {
		putModal: false,
		task_id: 0
	})

	const onHandlePutModal = (active, id) => {
		active ? putModalDispatch({
			type: 'OPEN',
			payload: id

		}) : putModalDispatch({
			type: 'CLOSE',
			payload: id
		})
	}

	// Check if there are tasks
	const [hasTask, setHasTask] = useState(false);

	return (
		<div className="homepage-container">
			<OutsideClick onOusideClick={onHandleNewModal}>
				{newTaskModal && <New_task
					onHandleNewModal={onHandleNewModal} />
				}
			</OutsideClick>

			<div>
				<Header_panel onHandleNewModal={onHandleNewModal}/>
					<div className="content-area">
						{putModalState.putModal && <UpdateTaskModal 
								onHandlePutModal={onHandlePutModal}
								taskId={putModalState.task_id} />}
						{!hasTask && <h3 id="no-tasks">No tasks</h3>}
						{
							taskData.map(element => <Task key={element.id}
															id={element.id}
															title={element.title} 
															description={element.description}
															onHandlePutModal={onHandlePutModal}
															/>)
						}
					</div>
			</div>
		</div>
	)
}

export default Homepage;