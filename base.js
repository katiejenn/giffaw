//var input = $("input").val();

$(document).ready(function(){
  console.log("here's your mock data to start with:")
  console.log(GLOBAL_MOCK_DATA_OBJECT)

  //GLOBAL_MOCK_DATA_OBJECT.data.forEach(function(element, index){
  	//var url = element.images.fixed_height.url;
  	//$("#sanity-check").append("<img src='" + url + "'>");
  	
  	$.get("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC", function handleResponse(data){
  		data.data.forEach(function(element){
  			$("#sanity-check").append("<img src='" + element.images.fixed_height.url + "'>");
  		});

	});

  	$(window).keydown(function(e){
		//alert("key was pressed! ");
        var keyCode = e.keyCode;
    	//console.log(keyCode);
        if(keyCode === 13)
        {
        	 $("img").remove();
        	//var input = $("input").val();
  			$.get("http://api.giphy.com/v1/gifs/search",{q:$("input").val(), api_key:"dc6zaTOxFJmzC"}, function handleResponse(data){
  				data.data.forEach(function(element){
  					$("#sanity-check").append("<img src='" + element.images.fixed_height.url + "'>");
  				});
			});
      
        }     
    });

    
  //});
 
  // can you render the mock data to the page?

})


