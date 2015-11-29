/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name" : "Genevieve Johnson",
	"role": "Developer",
	"welcomeMessage" : "A site for creating, making and building",
	"skills": [
	"Web Developer", "PhotoShop", "HTML", "CSS", "JS", "CartoDB"],
	"biopic": "images/img_5097.jpg",
	"contacts": {
		"mobile" : "718-783-1538",
		"email" : "iambcat@gmail.com",
		"github" : "CodingLady2",
		"location" : "New York"
	}
}


var career = {
	"jobs": [
		{
			"employer":"A Law Firm",
			"title": "Legal Secretary",
			"location": "New York",
			"dates": "2007 - Present",
			"description": "organize calendars, schedule meetings and appointments, heavy use of MicroSoft Suite to edit legal documents and create and edit visual presentations"
		},


		{
			"employer": "The New York Times",
			"title": "Web Developer",
			"location": "New York",
			"dates": "2016",
			"description": "use of HTML, CSS and JavaScript to create, edit and maintain websites"
		}
	]

}


var projects = {
			"title": "Education: A Study of PTA Fundraising, Student Achievement and Charter Schools",
			"dates": " September 2015 - Present",
			"description": "This geospatial mapping project compares PTA fundraising and student achievement in two New York City school districts to assess their bearing on success and failure rates in schools.  The project also studies the growth of charter school networks within these schools districts, with emphasis on the Success Academy School network with regard to their finances and pedagogical methods.",
			"images": 
				["Documents/GitHub/Project-Two/images/District23CharterSchools.jpg", "Documents/GitHub/Project-Two/images/Districts2and23TraditionalandCharterSchools.jpg","Documents/GitHub/Project-Two/images/SuccessAcademyChoropleth.jpg"],
			"tools": {
				"geospatialMapTool" : "CartoDB",
				"dataGathering" : "Excel"
			}
}


var education = {

"schools": [
		{
			"name": "The City University of New York",
			"city": "New York City",
			"major": "Media Communications Arts",
			"major2": "Media Communications Technologies",
			"graduation": "2007",
			"url" : "http://www2.cuny.edu/"
		},

		{
			"name": "The Graduate Center",
			"city": "New York City",
			"major": "Digital Humanities",
			"major2": "Interactive Technology and Pedagogy",
			"graduation": "Expected Graduation Date 2017",
			"url" : "http://www.gc.cuny.edu/Home"
		}
	],

"onLineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": "Expected Graduation Date 2016",
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}


$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
$("#main").append(bio.biopic);
$("#main").append(bio.contacts["mobile"]);
$("#main").append(bio.contacts["email"]);
$("#main").append(bio.contacts["github"]);
$("#main").append(bio.contacts["location"]);


$("#main").append(career.employer);
$("#main").append(career.title);
$("#main").append(career.location);
$("#main").append(career.dates);
$("#main").append(career.description);

$("#main").append(projects.title);
$("#main").append(projects.dates);
$("#main").append(projects.description);
$("#main").append(projects.images);
$("#main").append(projects.tools);


$("#main").append(schools.name);
$("#main").append(schools.city);
$("#main").append(schools.major);
$("#main").append(schools.major2);
$("#main").append(schools.graduation);
$("#main").append(schools.url);

$("#main").append(onLineCourses.title);
$("#main").append(onLineCourses.school);
$("#main").append(onLineCourses.dates);
$("#main").append(onLineCourses.url);