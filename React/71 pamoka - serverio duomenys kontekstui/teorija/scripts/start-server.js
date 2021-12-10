const { exec } = require('child_process');
const path = require('path');

const jsonServerCommand = path.join(
	__dirname,
	'../node_modules/.bin/json-server',
);
const databaseJsonPath = 'api.json';
const port = 5000;

const startServerCommand = `"${jsonServerCommand}" ${databaseJsonPath} -p ${port}`;
console.log(startServerCommand);

exec(startServerCommand, (error, stdout, stderr) => {
	console.log('BAIGIAU VYKDYTI');
	if (error) {
		console.log(`error: ${error.message}`);
		return;
	}
	if (stderr) {
		console.log(`stderr: ${stderr}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
});
