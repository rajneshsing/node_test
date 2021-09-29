/*var fs = require("fs"); //using the Node fs module you can read a file
var data = '';

// Create a read stream with your text file name in quotes (Node.txt)
var readerStream = fs.createReadStream('test.txt');

readerStream.setEncoding('UTF8');

//Stream events-
//'data','end','error'----see details at
https://nodejs.org/api/stream.html#stream_class_stream_readable

readerStream.on('data', function(chunk) {
data += chunk;
});

readerStream.on('end',function() {
console.log(data);
});

readerStream.on('error', function(err) {
console.log(err.stack);
});

console.log("Reading complete");*/

/*var fs = require("fs");

//data variable containing the data to be written to the file
var data = 'Hello welcome to Node.js tutorials on GeeksforGeeks';

// Create a writable stream with the output file name in quotes (Node1.txt)
var writerStream = fs.createWriteStream('test.txt');

// utf8 encoding
writerStream.write(data,'UTF8');

//end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
console.log(data.toString());
});

writerStream.on('error', function(err) {
console.log(err.stack);
});

console.log("You've successfully created Node1.txt");*/

/*const fs = require('fs');
//let data='';
async function print(readable) {
  readable.setEncoding('utf8');
  let data = '';
  for await (const chunk of readable) {
    data += chunk;
  }
 return data;
}

const ress=print(fs.createReadStream('test.txt')).then((value)=> { console.log(value) }).catch(console.error);*/


  

/*var fs = require("fs");  
var data = 'A Solution of all Technology';  
// Create a writable stream  
var writerStream = fs.createWriteStream('testt.txt');  
// Write the data to stream with encoding to be utf8  
writerStream.write(data,'UTF8');  
// Mark the end of file  
writerStream.end();  
// Handle stream events --> finish, and error  
writerStream.on('finish', function() {  
    console.log("Write completed.");  
});  
writerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended");*/  

var fs = require("fs");  
var data = '';  
// Create a readable stream  
var readerStream = fs.createReadStream('test11.txt');  
// Set the encoding to be utf8.   
readerStream.setEncoding('UTF8');  
// Handle stream events --> data, end, and error  
readerStream.on('data', function(chunk) {  
   data += chunk;  
});  
readerStream.on('end',function(){  
   console.log(data);  
});  
readerStream.on('error', function(err){  
   console.log(err.stack);  
}); 

 
console.log("Program Ended");  