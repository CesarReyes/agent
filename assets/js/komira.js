var server = 'http://agent.server/';
var secCode = null;

$(document).ready(function() {
	
	$('#do-login').click(function(e){
		
		var username = $('#username').val();
		var password = $('#password').val();
		
	    $.ajax({
	        type : "GET",
	        url : server + 'http://agent.server',        
	        dataType : "json",
	        data : {
	        	username : username,
	        	password : password
	        }
	    }).done(function(response){
	    	console.log(response);
	    	if(response.state=='ok'){
	    		$("#show-dashboard").trigger('click');
	    		
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