$(document).ready(function() {
    $(".smallImgs").on("click", function() {
	var fullimg = $(this).attr("src");
	var className = $(this).attr("data-imageId");
	$("#"+className).attr("src", fullimg);
    });

    $(".field").on("click", function() {
	var fields = $(this).val();
	$.getJSON("/api/explore/workers/" + fields, function(data) {
	    if(data.length > 0) {
		$(".workertab").remove();
		$(".results h3").remove();
		$.each(data, function(i, worker) {
		    $('.results').append('<div class="workertab" id="WorkerTab"><div class="resultsinfo"><div class="pic"><div id="profileimg"><img src="image/profilepic/' + worker.username + '"></div></div><div class="about"><h3>Workerfy</h3><p id="username">Name: <br>' + worker.username + '</p><p id="workfield">Workfield :<br>' + worker.work_field + '</p><p id="location">Location:<br>' + worker.Location + '</p><p id="email">Email:<br>' + worker.email + '</p><p id="phone">phone:<br>' + worker.phone + '</p><p id="phone2">Phone2:<br>' + worker.phone2 + '</p><p id="description">About:<br>' + worker.description + '</p></div></div><div class="resultspics"><div class="smallimg"><img src="/image/image1/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image2/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image3/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image4/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image5/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"></div><div class="fullimg"><img src="/image/image1/' + worker.username + '" id="fullone' + worker.id + '"></div></div></div>');

		    $(".smallImgs").on("click", function() {
			var fullimg = $(this).attr("src");
			var className = $(this).attr("data-imageId");
			$("#"+className).attr("src", fullimg);
		    });
		    
		  
		});

	    }else {
		$(".workertab").remove();
		$(".results h3").remove();
		$(".results").append("<h3> No Worker found.</h3>");
	    }
	});
    });

    $("#searchBTN").on("click", function() {
	var loc = $("#location").val();
	var work = $("#fields").val()
	if(work == "All" & loc == "All") {
	    $.getJSON("/api/explore/workers", function(data) {
		if(data.length > 0) {
		    $(".workertab").remove();
		    $(".results h3").remove();
		    $.each(data, function(i, worker) {
			$('.results').append('<div class="workertab" id="WorkerTab"><div class="resultsinfo"><div class="pic"><div id="profileimg"><img src="image/profilepic/' + worker.username + '"></div></div><div class="about"><h3>Workerfy</h3><p id="username">Name: <br>' + worker.username + '</p><p id="workfield">Workfield :<br>' + worker.work_field + '</p><p id="location">Location:<br>' + worker.Location + '</p><p id="email">Email:<br>' + worker.email + '</p><p id="phone">phone:<br>' + worker.phone + '</p><p id="phone2">Phone2:<br>' + worker.phone2 + '</p><p id="description">About:<br>' + worker.description + '</p></div></div><div class="resultspics"><div class="smallimg"><img src="/image/image1/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image2/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image3/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image4/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image5/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"></div><div class="fullimg"><img src="/image/image1/' + worker.username + '" id="fullone' + worker.id + '"></div></div></div>');

			$(".smallImgs").on("click", function() {
			    var fullimg = $(this).attr("src");
			    var className = $(this).attr("data-imageId");
			    $("#"+className).attr("src", fullimg);
			});
		    });
		}else {
		    $(".workertab").remove();
		    $(".results h3").remove();
		    $(".results").append("<h3> No Worker found.</h3>");
		}
	    });
	}else if(work != "All" & loc == "All") {
	    $.getJSON("/api/explore/workers/" + work, function(data) {
		if(data.length > 0) {
		    $(".workertab").remove();
		    $(".results h3").remove();
		    $.each(data, function(i, worker) {
			$('.results').append('<div class="workertab" id="WorkerTab"><div class="resultsinfo"><div class="pic"><div id="profileimg"><img src="image/profilepic/' + worker.username + '"></div></div><div class="about"><h3>Workerfy</h3><p id="username">Name: <br>' + worker.username + '</p><p id="workfield">Workfield :<br>' + worker.work_field + '</p><p id="location">Location:<br>' + worker.Location + '</p><p id="email">Email:<br>' + worker.email + '</p><p id="phone">phone:<br>' + worker.phone + '</p><p id="phone2">Phone2:<br>' + worker.phone2 + '</p><p id="description">About:<br>' + worker.description + '</p></div></div><div class="resultspics"><div class="smallimg"><img src="/image/image1/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image2/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image3/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image4/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image5/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"></div><div class="fullimg"><img src="/image/image1/' + worker.username + '" id="fullone' + worker.id + '"></div></div></div>');

			$(".smallImgs").on("click", function() {
			    var fullimg = $(this).attr("src");
			    var className = $(this).attr("data-imageId");
			    $("#"+className).attr("src", fullimg);
			});
		    });
		}else {
		    $(".workertab").remove();
		    $(".results h3").remove();
		    $(".results").append("<h3> No Worker found.</h3>");
		}
	    });
	}else if(work == "All" & loc != "All") {
	    $.getJSON("/api/explore/workersLoc/" + loc, function(data) {
		if(data.length > 0) {
		    $(".workertab").remove();
		    $(".results h3").remove();
		    $.each(data, function(i, worker) {
			$('.results').append('<div class="workertab" id="WorkerTab"><div class="resultsinfo"><div class="pic"><div id="profileimg"><img src="image/profilepic/' + worker.username + '"></div></div><div class="about"><h3>Workerfy</h3><p id="username">Name: <br>' + worker.username + '</p><p id="workfield">Workfield :<br>' + worker.work_field + '</p><p id="location">Location:<br>' + worker.Location + '</p><p id="email">Email:<br>' + worker.email + '</p><p id="phone">phone:<br>' + worker.phone + '</p><p id="phone2">Phone2:<br>' + worker.phone2 + '</p><p id="description">About:<br>' + worker.description + '</p></div></div><div class="resultspics"><div class="smallimg"><img src="/image/image1/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image2/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image3/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image4/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image5/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"></div><div class="fullimg"><img src="/image/image1/' + worker.username + '" id="fullone' + worker.id + '"></div></div></div>');

			$(".smallImgs").on("click", function() {
			    var fullimg = $(this).attr("src");
			    var className = $(this).attr("data-imageId");
			    $("#"+className).attr("src", fullimg);
			});
		    });
		}else {
		    $(".workertab").remove();
		    $(".results h3").remove();
		    $(".results").append("<h3> No Worker found.</h3>");
		}
	    });
	}else if(work != "All" & loc != "All") {
	    $.getJSON("/api/explore/workers/" + loc + "/" + work, function(data) {
		if(data.length > 0) {
		    $(".workertab").remove();
		    $(".results h3").remove();
		    $.each(data, function(i, worker) {
			$('.results').append('<div class="workertab" id="WorkerTab"><div class="resultsinfo"><div class="pic"><div id="profileimg"><img src="image/profilepic/' + worker.username + '"></div></div><div class="about"><h3>Workerfy</h3><p id="username">Name: <br>' + worker.username + '</p><p id="workfield">Workfield :<br>' + worker.work_field + '</p><p id="location">Location:<br>' + worker.Location + '</p><p id="email">Email:<br>' + worker.email + '</p><p id="phone">phone:<br>' + worker.phone + '</p><p id="phone2">Phone2:<br>' + worker.phone2 + '</p><p id="description">About:<br>' + worker.description + '</p></div></div><div class="resultspics"><div class="smallimg"><img src="/image/image1/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image2/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image3/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image4/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"><img src="/image/image5/' + worker.username + '" class="smallImgs" data-imageId="fullone' + worker.id + '"></div><div class="fullimg"><img src="/image/image1/' + worker.username + '" id="fullone' + worker.id + '"></div></div></div>');

			$(".smallImgs").on("click", function() {
			    var fullimg = $(this).attr("src");
			    var className = $(this).attr("data-imageId");
			    $("#"+className).attr("src", fullimg);
			});
		    });
		}else {
		    $(".workertab").remove();
		    $(".results h3").remove();
		    $(".results").append("<h3> No Worker found.</h3>");
		}
	    });

	}
    });
	    
});

