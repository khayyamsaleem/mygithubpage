
var ageCalc = function() {
//	var birthday = new Date(localStorage['dob']);
//	var today = new Date();
//	var duration = today - birthday;
//	var age = duration / 31556900000;
	var age = (new Date() - new Date(localStorage['dob'])) / 31556900000
	$('#age').html('<h2>' + age.toFixed(15) + '</h2>');
};

$(document).ready(function(){
	if ((navigator.userAgent.toLowercase().indexOf('webkit') > 0) && (typeof localStorage['dob'] == 'undefined')){
		$('#pikaday').remove();
		$('footer').html("<input type='date' id='datepicker' name='age' /> <button id='button'>Motivate</button>");
		$('#button').click(function(e){
			e.preventDefault();
			localStorage['dob'] = new Date($('#datepicker').value);
			$('form').fadeOut('fast');
			$('body').append("div id='age'></div>");
			setInterval(ageCalc, 80);
		});
	};
	if (typeof localStorage['dob'] != "undefined"){
		$('form').remove();
		$('body').append("<div id='age'></div>");
		setInterval(ageCalc, 80);
	} else {
		$('#button').click(function(e){
			e.preventDefault();
			localStorage['dob'] = picker.getDate();
			$('form').fadeOut("fast");
			$('body').append("<div id='age'></div>");
			setInterval(ageCalc, 80);
		});
	};
});
