
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var formattedName = HTMLheaderName.replace ("%data%", "Genevieve Johnson");
 $("#header").append (formattedName);

var HTMLheaderRole = '<span>%data%</span><hr/>';
var formattedRole = HTMLheaderRole.replace ("%data%", "Front End Developer");
 $("#header").append (formattedRole);


var skills.HTMLskills= {
	["MS Office Suite",
 	"PhotoShop",
 	"HTML",
 	"CSS",
 	"JavaScript",
]
};

var workExperience = {
	"name" : "Genevieve Johnson",
	"role" : "Web Developer",
	"HTMLcontactGeneric": 718-783-1538
	"picture" : "images/img_5097.jpg"
	"welcomeMessage": "I enjoy building websites",
	"skills": skills.HTMLskills	
};

//$("main").append (workExperience.*);


//Work Information Using Dot Notation follows//

	work.employer = {["ABC Corporation";
	work.position = "Web Developer";
	work.years = 3
	}

	work.employer = {"Photography Inc";
	work.position = "Photographer";
	work.years = 4
	}

	work.employer = {"Web Builers";
	work.position = "script writer";
	work.years = 2
	}

]


//Projects block notation follows//

	project [name] = {["Mapping Project";
	project [title] = "Mapping Poverty";
	project [dates] = "2014-2015"
	project [description] = "Hunger and Effects on Families"
	project [image] = "images/nettedmap.jpg"
	}

	project [name] = {["Mapping Collaboration";
	project [title] = "Technology, Best Uses";
	project [dates] = "2013-2014"
	project [description] = "Using Technology to advance Projects"
	project [image] = "images/internetmapping.jpg"
	}
	
]
//Education object literal notation follows//

	var education = {
		"schools": [

	{	"name" : "City College",
		"city": "New York, New York",
		"degree": "Media Communication Arts",
		"years": "2007-2012"
		"url": "https://www.ccny.cuny.edu/"
	},

		{
		"name" : "Brooklyn College",
		"city": "Brooklyn, New York",
		"degree": "Media Commuication Technology",
		"years": "2012-2015"
		"url": "http://www.brooklyn.cuny.edu/web/home.php"
	},

]

};


$("#main").append(education.name);
//$("main").append (education.name);


//Bio object literal notation follows//

	{	"name" : "City College",
		"role" : "Student, Code writer"
		"welcomeMessage" : "I enjoy Making and Building"
		"HTMLcontactGeneric" : 718-783-1538
	},


$("#main").append(bio.name);
//$("main").append (bio.name);
