var project = new Array ();

project = [
		["Subway Siesta", "subwaysiesta.html", "img/subwaysiestabubble.png"],
		["Project Vaus", "projectvaus.html", "img/vausbubble.png"],
		["CorpSquare", "corpsquare.html", "img/corpsquarebubble.png"],
		["Room for Good", "roomforgood.html", "img/roomforgoodbubble.png"],
		["Clutter Capture", "clutturecapture.html", "img/cluttercapturebubble.png"],
		["Smart Energy", "smartenergy.html", "img/smartenergybubble.png"],
	];


function createRandomProjects(){
	projectCopy = project;
	loc = window.location.href;
	loc = loc.substr(loc.lastIndexOf("/") + 1);
	for (var j = 0; j < projectCopy.length ; j++){
		if (loc == project[j][1]){
			projectCopy.splice(j,1);
			break;
		}
	}

	for (var i = 0; i < 3; i++){
		var size = projectCopy.length;
		var x = Math.floor(size*Math.random());	
		$project = $("<div/>" , {
			class : "grid-element",
			html : "<a href= ' " + project[x][1] + " '> <img src=' " + project[x][2] + " '/></a>"
		}).appendTo(".other-work");
		projectCopy.splice(x,1);
	}
}

$(document).ready(function(){
	createRandomProjects();

	$('.grid-element').hover(function (){
		$(this).fadeTo("slow", 0.5);
	}, function(){
		$(this).fadeTo("fast", 1);
	});
});