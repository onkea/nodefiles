var fs = require("fs");

fs.readFile('notes.txt', function (err, data)
{
if (err)
	{
	return console.error(err);
	}
	console.log("text from notes.txt: " + data.toString());
});


