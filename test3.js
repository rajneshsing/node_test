/*var fs = require('fs');
var filename = 'test.txt';
var str = fs.readFileSync(filename).toString();
var pattern = /hi/gim;
var myarray = str.match( pattern );
var len = myarray.length;
console.log("Occurrences of pattern in the string is : " + len);

var str1 = 'rjbitdemo@dsd.com'
var pattern1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = str1.match( pattern1 );
if(res){
	console.log("Valid email address");
}else{
	console.log("Please enter a valid email address");
}*/

const mongoose = require('mongoose');
  
// Connecting to database
mongoose.connect('mongodb://localhost:27017/GFG',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
  
// Schema of employee collection
const employeeSchema = new mongoose.Schema({
    name: String,
    city: String,
    salary: Number,
    department: String
})
  
// Model of employees collection
const Employee = mongoose.model(
        'employee', employeeSchema)
  
// Group employees by department field
// and computing total no. of employees
// and average salary in each department
Employee.aggregate([
    {
        $group:
        {
            _id: { department: "$department" },
            totalEmployee: { $sum: 1 },
            averageSalary: { $avg: "$salary" }
        }
    }
])
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
	