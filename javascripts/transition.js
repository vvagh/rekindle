                 

// Move from login page to "go" page
$('ifthingisconnected').click(function(){
	$("#go-button").fadeIn('slow');
	$("#logout-content").appendTo("#logout-space");
});

//Move from "go" page to loading page    
$("#go-button").click(function(){

	loading_screen = window.pleaseWait({
		logo: "img/rekindle.png",
		backgroundColor: '#f46d3b',
		loadingHtml: "<div class='spinner'><div class='cube1'></div><div class='cube2'></div></div>"
	});  

	setTimeout(function(){
		loading_screen.finish()
	},5000); 

	$("#welcome,#go-button").fadeOut();
	$("#canvas").fadeIn();
});
