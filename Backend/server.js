const express = require("express");
const cors = require('cors');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

// Reads the content of tasks.json
const readJsonFile = () => {
	const content = fs.readFileSync('../tasks.json', 'utf-8');
	return JSON.parse(content);
}

app.get('/', (req, res) => {
	res.send('Server is working')
})

app.get('/tasks', (req, res) => {
	const content = readJsonFile();
	res.send(content);
})

app.post('/task/new', (req, res) => {
	// Extract selected data from flow
	const { id, title, description } = req.body;

	// Read tasks.json and push new data to it
	const currentContent = readJsonFile();
	currentContent.push({ id, title, description });
	
	// Write new data to tasks.json
	fs.writeFileSync('../tasks.json', JSON.stringify(currentContent));
})

app.put('/task/update/:id', (req, res) => {

	// Get id from actual task
	const { id: paramsId } = req.params;

	// Getting data from flow
	const { id, title, description } = req.body;

	const currentContent = readJsonFile();

	// Iterate over all tasks and find current id index
	const selectedItem = currentContent.findIndex((item) => {
		item.id === paramsId
	})

	// Save currentData from selected index
	const { id: cId, title: cTitle, description: cDescription } = currentContent[selectedItem];

	// This makes the new object update only the different value, maintaining the old
	const newObj = {
		id: id ? id : cId,
		title: title ? title : cTitle,
		description: description ? description : cDescription
	}

	// Update current content
	currentContent[selectedItem] = newObj
	fs.writeFileSync('../tasks.json', JSON.stringify(currentContent));
})

app.delete('/task/delete/:id', (req, res) => {
	const { id: idParams } = req.params;
	const currentContent = readJsonFile();

	const selectedItem = currentContent.findIndex((item) => {
		item.id === idParams
	})

	currentContent.splice(selectedItem, 1);

	fs.writeFileSync('../tasks.json', JSON.stringify(currentContent))
})


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});