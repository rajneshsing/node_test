/*const allUsers = require('./data.json');
const fs = require('fs');
const app = require('express')();
var json2xls = require('json2xls');
const filename = 'sample.xlsx';
app.listen(5050, () => {
  console.log("app is running on port 5050");
  convert();
})
var convert = function () {
  var xls = json2xls(allUsers);
  fs.writeFileSync(filename, xls, 'binary', (err) => {
     if (err) {
           console.log("writeFileSync :", err);
      }
    console.log( filename+" file is saved!");
 });
}*/


// What you have
/*var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
var officersIds = [];
var officersIds1 = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});

//console.log(officersIds);
var officersIds1 = officers.map(officer =>{
  return officer.id
});

//console.log(officersIds1);


var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

var totalYears = pilots.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;
},0);

//console.log(totalYears);

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
	
  return (oldest.years) >pilot.years ? oldest : pilot;
}, {});

//console.log(mostExpPilot);


var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
//console.log(rebels);
const empire = pilots.filter(pilot => pilot.faction === "Empire");
//console.log(empire);



var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 20,
    shootingScore: 30,
    isForceUser: true,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 40,
    shootingScore: 10,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

var jediPersonnel = personnel.filter(function (person) {
  return person.name=='Ezra Bridger';
});
console.log(jediPersonnel);

var jediScores = jediPersonnel.map(function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
});

console.log(jediScores);
var totalJediScore = jediScores.reduce(function (acc, score) {
  return acc + score;
}, 0);

console.log(totalJediScore);*/


/*var totalJediScore = personnel
  .filter(function (person) {
    return person.name=='Ezra Bridger';
  })
  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);
  
 // console.log(totalJediScore);
  
  const totalJediScore1 = personnel
  .filter(person => person.name=='Ezra Bridger')
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);
  // console.log(totalJediScore1);*/
/*  const _ = require('lodash');
  var users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

var user = _.find(users, { lastName: "Doe", gender: "male" });
// user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }

var underAgeUser = _.find(users, function(user) {
	return user.age < 18;
});

console.log(user);

var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
var result = _.sortedUniq(sortedArray);
console.log(result);

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
var res=_.pick(object, ['a', 'c']);
//console.log(res);

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
var res1=_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }
console.log(res1);

var res3=_.join(['a', 'b', 'c'], ',');
console.log(res3);

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

var sort=_.orderBy(users, ['user', 'age'], ['asc', 'asc']);
console.log(sort);


var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
const filtr=_.filter(users, function(o) { return !o.active; });
console.log(filtr);*/

/*var fs = require('fs');
var path = require('path');
const fss = fs.readFileSync(path.join(__dirname + '/uploads/service2.png'));
console.log(`${fss}`);*/

var http = require('http');
var fs = require('fs');
console.log('Server will listen at :  127.0.0.1:3000 ');
http.createServer( (req, res)=> {
	console.log("Port Number : 3000");
	// Change the MIME type to application/pdf
	res.writeHead(200, {"Content-Type": "application/pdf"});
	 
	fs.readFile('test.pdf', (error,data) => {
		if(error){
			res.json({'status':'error',msg:err});
		}else{			
			res.write(data);
			res.end();       
		}
	});
}).listen(3000);