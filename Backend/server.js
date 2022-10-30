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
	// Get data from json
	const { id, title, description } = req.body;

	// Push data to array
	const currentContent = readJsonFile();
	currentContent.push({ id, title, description });
	
	// Write modified array to json
	fs.writeFileSync('../tasks.json', JSON.stringify(currentContent));
})

app.put('/task/update/:id', (req, res) => {

	// Get data from json
	const { id, title, description } = req.body;
	const currentContent = readJsonFile();

	// Find index
	const selectedItem = currentContent.findIndex((item) => {
		return item.id === id
	})
	
	// Backup array
	const { id: cId, title: cTitle, description: cDescription } = currentContent[selectedItem];

	// Keep untouched values unchanged
	const newTaskObj = {
		id: id ? id : cId,
		title: title ? title : cTitle,
		description: description ? description : cDescription
	}

	// Update array
	currentContent[selectedItem] = newTaskObj;

	// Rewrite modified array to json
	fs.writeFileSync('../tasks.json', JSON.stringify(currentContent));
})

app.delete('/task/delete/:id', (req, res) => {

	// Get data from json
	const { id: idParams } = req.params;
	const currentContent = readJsonFile();

	// Find index
	var selectedItem;
	for (let i = 0; i < currentContent.length; i++){
		if (currentContent[i].id == idParams){
			selectedItem = i
		}
	}

	// Remove item from array
	currentContent.splice(selectedItem, 1);

	// Rewrite modified array to json
	fs.writeFileSync('../tasks.json', JSON.stringify(currentContent))
})


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});