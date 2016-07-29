var fs = require("fs");
var path  = "./write-notes.txt";
var data = "Write some text to a file from nodejs!";

fs.writeFile(path, data, function(error) {
	if(error) { 
	
	console.error("write error: " + error.message);
	}
	else
	{
	console.log("We did it!");
	}
});
