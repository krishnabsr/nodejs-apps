const express = require('express');
const app = express();

function generateProfileUrl(username) {
  let url = "https://github.com/" + username;
  return url;
}

app.get('/github-profile' , (req ,res) => {
  let username = req.query.username;
  res.send(generateProfileUrl(username));
})

function generateCertificate(firstName, lastName, courseName) {
  return "Hello " + firstName + " " + lastName + "!, " + "Your have successfully completed " + courseName;
}

app.get('/certificate', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
})

function calculateGrade(math, english, science) {
  let total = math + english + science;
  let grade = total / 3;
  return grade;
}

app.get('/grade', (req , res) => {
  let math = parseInt(req.query.math);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  res.send(calculateGrade(math, science, english));
})

function splitBill(billAmount, numberofFriends) {
  let amount = billAmount / numberofFriends;
  return "Each friend should pay " + "₹" + amount;
}

app.get('/split-bill', (req , res) =>{
  let billAmount = parseInt(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  res.send(splitBill(billAmount, numberOfFriends));
})

function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = totalHours * hourlyWage;
  return "Your monthly salary is ₹" + monthlySalary;
}

app.get('/monthly-salary', (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseInt(req.query.hourlyWage);
  res.send(calculateSalary(totalHours, hourlyWage));
})



const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})