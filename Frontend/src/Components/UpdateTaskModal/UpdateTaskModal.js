import React, { useRef } from "react";

import './UpdateTaskModal.scss';
import Elements from "../Elements/Elements";
import { updateTask } from "../APIHandler/APIHandler"

const UpdateTaskModal = (props) => {

	const newTitle = useRef(null);
	const newDescription = useRef(null);

	const onElementHandle = (type) => {
		switch (type){
			case "leave":
				props.onHandlePutModal(false)
				break;
			case "change":
				updateTask(
					props.taskId,
					newTitle.current.value,
					newDescription.current.value
				)
				break;
			default:
				return
		}
	}

	return (
		<div className="gray-container">
			<div className="sub-container">
				<div className="update-container">
					<div className="update-title">
						<Elements 
							type="label" 
							name="Change title" />
						<Elements
							type="input" 
							name="title"
							inputRef={newTitle} />
					</div>
					<div className="update-description">
						<Elements 
							type="label" 
							name="Change description" />
						<Elements 
							type="textarea" 
							name="description" 
							rows="5" 
							cols="20"
							inputRef={newDescription}/>
					</div>
					<div className="update-buttons">
						<Elements 
							onElementHandle={() => onElementHandle("leave")} 
							className="button" 
							type="button" 
							name="Leave" />
						<Elements
							onElementHandle={() => onElementHandle("change")}
							className="button" 
							type="button" 
							name="Change" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpdateTaskModal;