//create a function that creates a new post object and add it to a posts array.
// Each post object should have two properties: text(the users input, a string) and id 
// (a number, dynamically generated).
// Each id should be unique to that post (no two post objects should have the same id).

//version A:
// var idArray = [];
// var postArray = [];
// var newPost = function(e) {
// 	e.preventDefault();
// 	alert("abc");

// 	var addPost = {
// 	 newText: $("#post-name").val(),
// 	 newUniqueId: function() {
// 					  var newNumber = Math.floor((Math.random() * 100000) + 1);
// 					  if (idArray.indexOf(newNumber) === -1) {
// 					  idArray.push(newNumber);
// 					  return newNumber; 
// 					  } else {
// 					  	newUniqueId();
// 					  	}
// 					 }
// 	};
// 	postArray.push(addPost);
// 	alert(addPost.newUniqueId);
// };	

// $(".add-post").on('click', newPost);

//Version B


var posts = [];
var idNumber = 0; 

var addPost = function(e) {
	e.preventDefault();
	
	var newText = $("#post-name").val()
	idNumber++;

	var newPost = {
		text: newText,
		id: idNumber
	};
	posts.push(newPost);
};
$(".add-post").on('click', addPost);


//exercise 2
// Create a second function that adds all the posts in the posts array to the .posts div.

// In addition, add the id to the element with our data attribute. Each post element should look something like this:

// <p class="post" data-id="1">Hey man! I'm a post!</p>

var addPostsToDiv = function () {
	$("#michal").empty(); 
for (var i = 0; i<posts.length; i++) {
	$(".posts").append('<p class="post" data-id=' + posts[i].id + '> <button href="#" class="remove">remove</button>' + ' ' + posts[i].text + ' ' + posts[i].id + ' </p>');
	}
$(".remove").on('click', function(){
	$(this).closest("p").remove();
});
};

$(".add-post").on('click', addPostsToDiv);


