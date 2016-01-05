/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
	"name": "Wei Fu",
	"role": "Research Associate",
	"contacts": {
		"mobile": "443-838-2315",
		"email": "jason.wfu@gmail.com",
		"github": "fupangpangpang",
		"twitter": "JasonWFU",
		"location": "Baltimore"
	},
	"bioPic": "images/ProfilePic.jpg",
	"welcome_message": "Welcome to my resume",
	"skills": [
		"Web Development",
		"Graphical Design",
		"Experienced Sailer",
		"Adventurous Hiker"
	]
};

var education = {
	"schools": [
		{
			"name": "Johns Hopkins University",
			"location": "Baltimore, MD, USA",
			"degree": "Masters",
			"majors": ["Epidemiology"],
			"date": 2013
		},
		{
			"name": "Peking University",
			"location": "Beijing, China",
			"degree": "Bachelor",
			"majors": ["Public Health","Economics"],
			"date": 2011
		}
	],
	"OnlineCourses": [
		{
			"title": "Machine Learning",
			"school": "Coursera",
			"date": 2015,
			"url": "https://www.coursera.org/learn/machine-learning/"
		}
	]
};

var work = {
	"jobs": [
	{
		"employer": "Hopkins Lupus Center",
		"title": "Research Data Analyst",
		"dates": "Feb 2015 - Future",
		"description": "Assist in research grant application and Conduct research under supervision of Dr. Michelle Petri; Perform statistical analyses, both cross-sectional and longitudinal studies, on various databases, including but not limited to clinical records, urine proteomics, flow cytometry and gene expression data; Completed analyses and drafted results for 6 abstracts accepted in 2015 American College of Rheumatology Annual Meeting; and facilitate 8 manuscript preparation and submission to high impact conference/journals; Lead multiple projects including: evaluation of correlation between gene expression and disease activities over time; identifying predictors of transition between different lupus activities stages and to death/damage accruals."

	},
	{
		"employer": "International Vaccine Access Center",
		"title": "Research Associate",
		"dates": "July 2013 - Dec 2015",
		"description": "Coordinated quantitative model development led by Dr. Scott Zeger for Pneumonia Etiology Research for Children Health (PERCH); Worked closely with lead biostatistician/programmer Dr. Zhenke Wu to improve model performance by running both simulations and experiments on real data; Improved model’s cross-platform compatibility by converting code from WINBUGS to JAGS and testing it on all three major operational systems: Windows, Mac OS and Linux; Created dynamic interactive visualization using Javascript to compare etiology across different sites; Built interactive website using Shiny application in R to help clinicians understand and use the model"
	}

	]
};


var projects = {
	"projects": [
	{
		"title": "Explore prognostic factor of lupus ",
		"dates": "2015",
		"description": "investigate the transition between Long Quiescence/ Relapse-Remission/ Chronic Active and study the predictors of transition between them and to death/damage accruals.",
		"images": ""
	}
	]
};

function inName(OldName) {
	var name_array = OldName.split(" ");
	var FirstName = name_array[0].slice(0,1).toUpperCase()+name_array[0].slice(1).toLowerCase();
	var LastName = name_array[1].toUpperCase();
	return FirstName + " " + LastName;
}


var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);

var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedlocation);
$("#header").append(formattedPic);
$("#header").append(formattedWMsg);




if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills =[];
	for (var i=0, iLen=bio.skills.length; i<iLen; i++) {
		formattedSkills.push(HTMLskills.replace("%data%",bio.skills[i]));
	}
	$("#skills-h3").append(formattedSkills);

}

$("#education").append(HTMLschoolStart);

displayWork();
displayEducaiton();

function displayEducaiton(){
	for (var school = 0; i<education.schools.length; school++) {
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedschoolLoc = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedschoolDeg = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		var formattedschooldate = HTMLschoolDates.replace("%data%",education.schools[school].date);
		$(".education-entry:last").append(formattedschoolName + formattedschoolDeg);
		$(".education-entry:last").append(formattedschoolLoc);
		$(".education-entry:last").append(formattedschooldate);
		$(".education-entry:last").append(formattedschoolMajor);
	if (education.OnlineCourses.length >0 ){
		$("#education").append(HTMLonlineClasses);
		for (var course = 0; i<education.OnlineCourses.length; course++) {
      var formattedoctitle = HTMLonlineTitle.replace("%data%",education.OnlineCourses[course].title);
      var formattedocschool = HTMLonlineSchool.replace("%data%",education.OnlineCourses[course].school);
      var formattedocdate = HTMLonlineDates.replace("%data%",education.OnlineCourses[course].date);
      var formattedocURL = HTMLonlineURL.replace("%data%",education.OnlineCourses[course].url);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedoctitle+formattedocschool);
      $(".education-entry:last").append(formattedocdate);
      $(".education-entry:last").append(formattedocURL);
		}

	}

	}
}

function displayWork(){
	for (var workitem = 0; i<work.jobs.length; workitem++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedemployer = HTMLworkEmployer.replace("%data%",work.jobs[workitem].employer);
		var formattedworktitle = HTMLworkTitle.replace("%data%",work.jobs[workitem].title);
		var formattedworkdate = HTMLworkDates.replace("%data%",work.jobs[workitem].dates);
		var formattedworkdesc = HTMLworkDescription.replace("%data%",work.jobs[workitem].description);
		$(".work-entry:last").append(formattedemployer+formattedworktitle);
		$(".work-entry:last").append(formattedworkdate);
		$(".work-entry:last").append(formattedworkdesc);


	}
}


projects.display= function(){
	for (var project = 0; i<projects.projects.length; project++) {
		$("#projects").append(HTMLprojectStart);
		var formattedprojtitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedprojdate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedprojdesc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedprojtitle);
		$(".project-entry:last").append(formattedprojdate);
		$(".project-entry:last").append(formattedprojdesc);

		if (projects.projects[project].images.length >0) {
			var formattedprojimage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
			$(".project-entry:last").append(formattedprojimage);
		}

	}};
projects.display();


$("#mapDiv").append(googleMap);
