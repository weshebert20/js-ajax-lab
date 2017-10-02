$( document ).ready(function() {
    
    // grab all the data from the api and enter it into the ul
	  $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    		.done(function(data){
			var objectList = JSON.parse(data);
			console.log(objectList);
			// loop through the object and append into ul
			for(let i = 0; i<= objectList.length;i++){
		  		$("#cats").append('<li>' + objectList[i].name + '-' + objectList[i].note + '</li>');
			}
		});
    	// once form is filled in submit, grab those elements and append those to the list
    	$("#new-cat").on("submit", function(){
    		event.preventDefault();
    		// grab values of each
    		var name = $('#cat-name').val();
    		var note = $('#cat-note').val();
    		
  			$("ul").append('<li>' + name + '-' + note + '</li>');
  			// create new object with the name and note value
  			newCat = {
  				name: name,
  				note: note,
  				};
  		// post the new object into ajax so it is stored
  		$.ajax({
    		method: 'POST',
    		url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
   			data: JSON.stringify(newCat)
			});
    	});
});
