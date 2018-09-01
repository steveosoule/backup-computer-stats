const fs = require('fs');
const { exec } = require('child_process');

// Export System PATH
var path_list = process.env.path.split(';').join('\n')
fs.writeFile('path.txt', path_list, console.log);

// Export NPM Global Installs
exec('npm -g ls -json > npm-globals.json');

// Output Program Application list
exec('wmic /output:applications.txt product get name,version' /*/format:csv'*/, function(){
	console.log('done')
});