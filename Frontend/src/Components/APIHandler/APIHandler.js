import axios from "axios";

var postTask = function(id_, title_, description_) {
	
	axios.post('http://localhost:3002/api/task', {
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

export {postTask};