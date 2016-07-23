$(function(){
	/*
	*Submut search form
	*/
	$('#app-body').find('form').submit(function(e){
		e.preventDefault();
		var query = $(this).find('input[type="text"]').val();
		alert(query);
	})
})