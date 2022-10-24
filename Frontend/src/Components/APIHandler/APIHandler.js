import axios from "axios";

const port = "3001"
const url = `http://localhost:${port}`;

var getTask = (setTaskData) => {
	axios.get(`${url}/tasks`)
		.then((res) => {
			setTaskData(res.data);
		})
		.catch((err) => {
			console.log(err);
		})
}

var postTask = (id_, title_, description_) => {
	
	axios.post(`${url}/task/new`, {
		id: id_,
		title: title_,
		description: description_
	})
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	})
}

var updateTask = () => {
	// TODO
}

var deleteTask = () => {
	// TODO
}

export {getTask, postTask, updateTask, deleteTask};