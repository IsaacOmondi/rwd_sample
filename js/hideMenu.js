$(document).ready(function() {
$(function(){
  $('#showPhoneNav').click(function() {
    $("#myNav").slideToggle('normal',function(){ //Shows Nav area
	if ($('#myNav').is(':visible')) {
		$('#showPhoneNav').text('Hide Data');
	} else {
		$('#showPhoneNav').text('Show Data');
	} //end of if
	}); //end of slidetoggle
  }); //end of myNav
}); //end showPhoneNav
}); //end of ready