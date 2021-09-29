/*var fs = require('fs');

fs.readFile('test.txt', 'utf8', function (err, data) {
    
    debugger;

    if (err) throw err;
    
    console.log(data);
});*/

/*const items = [1, 2, 3];
//items.forEach(console.log)

// Avoid — throws exception
const m = new Map();
const a = [1,2,3];
[...m.values()].forEach(console.log);
[...m.values()].forEach(console.log);

let abc={b:1};

abc.b=abc;
console.log(abc);*/

/*var createError = require('http-errors');
var express = require('express');
var fs = require('fs');
var app = express();
 
fs.readFile('foo.txt', function (err, buf) {
  if (err) {
    if (err.code === 'ENOENT') {
      var httpError = createError(404, err, { expose: false })
    } else {
      var httpError = createError(500, err)
    }
  }
  //console.log(httpError);
})


/*const faker = require('faker');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

let jobTitle = faker.name.jobTitle();
let prefix = faker.name.prefix(); 
let suffix = faker.name.suffix();
let jobArea = faker.name.jobArea();

let phone = faker.phone.phoneNumber();*/

//console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
//console.log(`Job title: ${jobTitle}`);
//console.log(`Job area: ${jobArea}`);
//console.log(`Phone: ${phone}`);

/*const faker = require('faker');
//const fs = require('fs')
//import faker from 'faker';
function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();*/

//fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));


const express = require('express')
const bodyParser = require('body-parser')
const validateFn= require('./validate');
const { validate, ValidationError, Joi } = require('express-validation')

/*const loginValidation = {
  body: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
}*/

/*const app = express();
app.use(bodyParser.json())

app.post('/login',validateFn, (req, res) => {
  res.json(200)
})

app.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
})

app.listen(3000)*/
/*const express = require('express');
const bodyParser = require('body-parser');
const pick = require('./pick');

const app = express();
app.use(bodyParser.json())

app.post('/login', (req, res) => {
	
  const filter = pick(req.body, ['startDate', 'endDate', 'minCount', 'maxCount']);
     const matches = [];
  const aggregationQuery = [
    {
      $project: {
        key: 1,
        createdAt: 1,
        totalCount: { $sum: '$counts' },
      },
    },
  ];

  if (filter.startDate) matches.push({ createdAt: { $gt: new Date(filter.startDate) } });
  if (filter.endDate) matches.push({ createdAt: { $lt: new Date(filter.endDate) } });
  if (filter.minCount !== undefined) matches.push({ totalCount: { $gt: filter.minCount } });
  if (filter.maxCount !== undefined) matches.push({ totalCount: { $lt: filter.maxCount } });
  if (matches.length !== 0) {
    aggregationQuery.push({
      $match: {
        $and: matches,
      },
    });
  }

 // res.send({ records: [filter] });
  res.send({ records: [aggregationQuery] });
})
app.listen(3000)*/

/*const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
console.log(`Server is running at ${port}`);
});*/
/*const buf1 = new Buffer("Bacancy Technology");

console.log(buf1);
console.log(buf1.toString('utf-8'));*/


  
/*const crypto = require('crypto');

let data = "This Line will be encoded using MD5 Hash algorithm.";

console.log(crypto.createHash('md5').update(data).digest('hex'));

function randomValueHex(len) {
    return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len);
}

const result = randomValueHex(12);
console.log(result);*/


/*const fs = require('fs');
const pdf = require('pdfkit');

const myPdf = new pdf;

myPdf.pipe(fs.createWriteStream('test.pdf'));

myPdf.font('Times-Roman').fontSize(44).text('Sample PDF generated using Node Modules', 100, 100);

myPdf.end();*/

const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

// Writing Data to CSV
const writeStream = fs.createWriteStream('test.csv');

csv
    .write([["No.", "Skill"], ["1", "HTML"], ["2", "CSS"], ["3", "JS"], ["4", "Github"], ["5", "SQL"]], { headers: true })
    .pipe(writeStream);


// Reading Data from CSV
fs.createReadStream(path.resolve(__dirname, 'test.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.log(error))
    .on('data', data => console.log(data))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows !`));