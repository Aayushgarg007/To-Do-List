// // check off specific Todos by clicking
// $("li").click(function(){
// 	// here $(this).css("color") will return the color
// 	// in rgb( , , ) format
// 	// if li is gray
// 	if( $(this).css("color") === "rgb(128, 128, 128)" ){
// 		// turn it black
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// 	}
// 	// else
// 	else{
// 		// turn it gray
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});
// 	}
// });

// to avoid this messy code above we can just create a class
// then toggle that class as below
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
// in this code we added event listener to the ul not the li.
// the second argument tells the whenever the li in ul is click
// fire the callback function.
// this way we can assure that the future li in ul will have that particular event listener
// beacuse event listeners are only added once when js file is loaded

// event bubble might occur if we are not carefull
// use .stopPropagation() method to stop it as shown below
// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// accept input only when enter key is pressed
$("input[type='text']").keypress(function(event){
	// code for enter key is 13
	if(event.which===13){
		// grabbing new todo from input
		var todoText = $(this).val();
		$("input").val("");
		// create a new li and add to ul
		$("ul").append('<li><span><i class="fa fa-trash"></i></span> '+ todoText +"</li>");
	}
});

// show/hide the input bar
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});
