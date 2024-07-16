let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let employeeArray = [
  { name: "Rahul Gupta", department: "HR", salary: 50000 },
  { name: "Sneha Sharma", department: "Finance", salary: 60000 },
  { name: "Priya Singh", department: "Marketing", salary: 55000 },
  { name: "Amit Kumar", department: "IT", salary: 65000 },
];

let bikesArray = [
  { make: "Hero", model: "Splendor", mileage: 80 },
  { make: "Bajaj", model: "Pulsar", mileage: 60 },
  { make: "TVS", model: "Apache", mileage: 70 },
];

let movieArray = [
  { title: "Tum Hi Ho", genre: "Romantic", rating: 4 },
  { title: "Senorita", genre: "Pop", rating: 5 },
  { title: "Dil Chahta Hai", genre: "Bollywood", rating: 3 },
];

let taskArray = [
  { taskId: 1, taskName: "Prepare Presentation", status: "pending" },
  { taskId: 2, taskName: "Attend Meeting", status: "in-progress" },
  { taskId: 3, taskName: "Submit Report", status: "completed" },
];

/*
Question 1:

Write an Express code snippet to filter employees by department.

Instructions:

Define an endpoint /employees/department/:department using the get method.

Implement a function filterByDepartment that returns true if the employee belongs to the specified department.

Inside the endpoint, extract the department parameter from the request and use it to filter the employees.

Send the filtered employees as a JSON response.
*/

function filterByDepartment(eachEmployeObj, specified_dep) {
  return eachEmployeObj.department === specified_dep;
}
app.get("/employees/department/:department", (req, res) => {
  let specified_dep = req.params.department;
  let filterEmployeeArray = employeeArray.filter((eachEmployeObj) =>
    filterByDepartment(eachEmployeObj, specified_dep),
  );
  res.json(filterEmployeeArray);
});

/*
Question 2:

Write an Express code snippet to filter bikes by mileage greater than a specified value.

Instructions:

Define an endpoint /bikes/mileage/:minMileage using the get method.

Implement a function filterByMileage that returns true if the bike's mileage is greater than the specified value.

Inside the endpoint, parse the minMileage parameter from the request and use it to filter the bikes.

Send the filtered bikes as a JSON response.
*/

function filterByMileage(eachBikeObj, specified_mileage) {
  return eachBikeObj.mileage > specified_mileage;
}
app.get("/bikes/mileage/:minMileage", (req, res) => {
  let specified_mileage = parseFloat(req.params.minMileage);
  let filterBikeArray = bikesArray.filter((eachBikeObj) =>
    filterByMileage(eachBikeObj, specified_mileage),
  );
  res.json(filterBikeArray);
});

/*
Question 3:

Write an Express code snippet to filter bikes by a specific make.

Instructions:

Define an endpoint /bikes/make/:make using the get method.

Implement a function filterByMake that returns true if the bike's make matches the specified value.

Inside the endpoint, extract the make parameter from the request and use it to filter the bikes.

Send the filtered bikes as a JSON response.
*/
function filterByMake(eachBikeObj, specified_make) {
  return eachBikeObj.make === specified_make;
}

app.get("/bikes/make/:make", (req, res) => {
  let specified_make = req.params.make;
  let filterBikeArray = bikesArray.filter((eachBikeObj) =>
    filterByMake(eachBikeObj, specified_make),
  );
  res.json(filterBikeArray);
});

/*
Question 4:

Write an Express code snippet to filter songs by rating higher than a specified value.

Instructions:

Define an endpoint /songs/rating/:minRating using the get method.

Implement a function filterByRating that returns true if the song's rating is higher than the specified value.

Inside the endpoint, parse the minRating parameter from the request and use it to filter the songs.

Send the filtered songs as a JSON response.
*/
function filterByRating(eachMovieObj, specifiedRating) {
  return eachMovieObj.rating > specifiedRating;
}
app.get("/songs/rating/:minRating", (req, res) => {
  let specifiedRating = parseFloat(req.params.minRating);
  let filterMovieArray = movieArray.filter((eachMovieObj) =>
    filterByRating(eachMovieObj, specifiedRating),
  );
  res.json(filterMovieArray);
});

/*
Question 5:

Write an Express code snippet to filter songs by a specific genre.

Instructions:

Define an endpoint /songs/genre/:genre using the get method.

Implement a function filterByGenre that returns true if the song's genre matches the specified value.

Inside the endpoint, extract the genre parameter from the request and use it to filter the songs.

Send the filtered songs as a JSON response.
*/
function filterByGenre(eachMovieObj, specifiedGenre) {
  return eachMovieObj.genre === specifiedGenre;
}
app.get("/songs/genre/:genre", (req, res) => {
  let specifiedGenre = req.params.genre;
  let filterMovieArray = movieArray.filter((eachMovieObj) =>
    filterByGenre(eachMovieObj, specifiedGenre),
  );
  res.json(filterMovieArray);
});

/*
Question 6:

Write an Express code snippet to filter tasks by a specific status.

Instructions:

Define an endpoint /tasks/status/:status using the get method.

Implement a function filterByStatus that returns true if the task's status matches the specified value.

Inside the endpoint, extract the status parameter from the request and use it to filter the tasks.

Send the filtered tasks as a JSON response.
*/
function filteByStatus(eachTaskObj, specifiedStatus) {
  return eachTaskObj.status === specifiedStatus;
}
app.get("/tasks/status/:status", (req, res) => {
  let specifiedStatus = req.params.status;
  let filterTaskArray = taskArray.filter((eachTaskObj) =>
    filteByStatus(eachTaskObj, specifiedStatus),
  );
  res.json(filterTaskArray);
});
