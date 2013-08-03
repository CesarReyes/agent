var server = 'http://aplico.dev/es/';
var secCode = null;

$(document).ready(function() {
	
	$('#do-login').click(function(e){
		
		var username = $('#username').val();
		var password = $('#password').val();
		
	    $.ajax({
	        type : "POST",
	        url : server + 'login/start',        
	        dataType : "json",
	        data : {
	        	username : username,
	        	password : password
	        }
	    }).done(function(response){
	    	console.log(response);
	    	if(response.state=='ok'){
	    		$('#login-page').hide();
	    		$('#dashboard-page').show();
	    		
	    		//TODO: inicia proceso de verificaciones
	    	}else{
	    		
	    	}
	    });	

	});

	

});


function get_sesion_key(){
    $.ajax({
        type : "GET",
        url : server + 'api/get_secur',        
        dataType : "json",
        data : {
        	request_id : request_id
        }
    }).done(function(response){});	
    
}