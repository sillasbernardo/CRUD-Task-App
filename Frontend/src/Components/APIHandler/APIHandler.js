import axios from "axios";

// Attributes for server connection
const port = "3001"
const url = `http://localhost:${port}`;

// Get data
var getTask = (setTaskData) => {
	axios.get(`${url}/tasks`)
		.then((res) => {
			setTaskData(res.data);
		})
		.catch((err) => {
			console.log(err);
		})
}

// Post data
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

// Put data
var updateTask = (id_, title_, description_) => {
	axios.put(`${url}/task/update/${id_}`, {
		id: id_,
		title: title_,
		description: description_
	})
}

// Delete data
var deleteTask = (id_) => {
	axios.delete(`${url}/task/delete/${id_}`, {
		id: id_
	})
}

export {getTask, postTask, updateTask, deleteTask};