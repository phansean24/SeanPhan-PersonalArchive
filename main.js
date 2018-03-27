 $( document ).ready(function() {

 	$("#box1").mouseenter(function(){
 		$("#second").addClass("hidden");
 		$("#first").removeClass("hidden");
 		$("#third").addClass("hidden");
 		$("#prev1").removeClass("hidden");
 		$("#prev2").addClass("hidden");

 		$("h2#one").html("1");
 		$("h1.project-title").html("Project One");

 	});

 	$("#box2").mouseenter(function(){
 		$("#second").removeClass("hidden");
 		$("#first").addClass("hidden");
 		$("#third").addClass("hidden");
 		$("#prev1").addClass("hidden");
 		$("#prev2").removeClass("hidden");
 		$("#prev3").addClass("hidden");

 		$("h2#one").html("2");
 		$("h1.project-title").html("Project Two");

 		//show and hide the images using  add and remove class hidden

 	});

 	 $("#box3").mouseenter(function(){
 		$("#second").addClass("hidden");
 		$("#first").addClass("hidden");
 		$("#third").removeClass("hidden");
 		$("#prev1").addClass("hidden");
 		$("#prev2").addClass("hidden");
 		$("#prev3").removeClass("hidden");

 		$("h2#one").html("3");
 		$("h1.project-title").html("Project Three");
 	});

 	$("#box1").click(function(){
    $("page1.html").slideUp();

	});

});