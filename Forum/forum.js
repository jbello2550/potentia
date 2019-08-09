//Database Info
var firebaseConfig = {
    apiKey: "AIzaSyB19HZXXiWEESBv2MULUzBk5mbf7P3Ip1Y",
    authDomain: "graphic-pattern-247613.firebaseapp.com",
    databaseURL: "https://graphic-pattern-247613.firebaseio.com",
    projectId: "graphic-pattern-247613",
    storageBucket: "",
    messagingSenderId: "1096747484004",
    appId: "1:1096747484004:web:f0091ec8df574d7d"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var post_id_comment;

var postAndCommentdiv;

var num = 0;
var num_comments = 0;

//The moment you click post 
$("#post").submit(function(e) {
  e.preventDefault();
  num ++;
  num_comments --;

  var post_input = document.getElementById("post_here");
  var post_text = post_input.value

  var main_topic = document.getElementById("topic_text");
  var main_topic_text = main_topic.value

  var name = document.getElementById("name_text");
  var name_input = name.value;
  console.log(main_topic_text);
  //You can't post something without a caption
  if (post_text === null || 
		main_topic_text === null || 
		name_input === null || 
		post_text === undefined || 
		main_topic_text === undefined || 
		name_input === undefined || 
		post_text.length === 0 || 
		main_topic_text.length === 0 || 
		name_input.length === 0 || 
		post_text === " " ||
		name_input === " " || 
		main_topic_text === " ") {
		console.log("no post");
		$("#cant_post").fadeIn("slow", function() {
			$("#cant_post").delay(5000).fadeOut();
		});
	} else {
		//Saving the post to the database (calling the function)
		saveItemToDatabase(post_text, main_topic_text, name_input);
	}
  //resetting the text input's to be empty
  post_input.value = ""
  main_topic.value = ""
  name.value = ""
});

//Saving the post to the database
function saveItemToDatabase(post_text, main_topic_text, name_input){
	doc = db.collection("forum_posts").add({
		postText: post_text,
		mainTopic: main_topic_text,
		nameText: name_input
	})
	.then(function(docRef){
		docRef.get().then(function(doc) {
			addNewItem(doc);

		});
	});
}

//Appending the post to the page
function addNewItem(doc){
	//console.log(post_id);
	
	var post_box = document.createElement("table");
	//styling the post box
	post_box.classList.add("post_box");
	post_box.style.marginLeft = "12vw";
	post_box.style.backgroundColor = "#F0F0F0";
	post_box.style.width = "75%";
	post_box.style.paddingTop = "0px";
	post_box.style.paddingBottom = "0px";
	post_box.style.marginBottom = "5px";
	post_box.style.border = "1px solid #D9D0D9";
	post_box.style.paddingLeft = "20px";
	post_box.style.flex = "1";
    post_box.style.height = "auto";
    post_box.style.position = "relative";

	var post_id = doc.id;
	post_box.id = post_id;
	var string_id = post_id.toString();

	var commentdiv = document.createElement("div");
	commentdiv.id = string_id.concat("_comment");
	var comment_id = commentdiv.id
	console.log(comment_id);
	// commentdiv.style.display = "none";
	
	var overalldiv = document.createElement("div");
	overalldiv.id = string_id.concat("_overalldiv");
	var overalldiv_id = overalldiv.id;
	console.log(overalldiv_id);

	//styling the caption box
	caption_box = document.createElement("div");
	caption_box.classList.add("caption_box");

	//styling the caption
	var caption = document.createElement("p");
	caption.innerHTML = doc.data().postText;
	caption.style.marginLeft = "30%";
	caption.style.marginTop = "-40px";
	caption.style.fontFamily = "'Open Sans Condensed', sans-serif";
	caption.style.padding = "0px";

	//Appending the caption to the div it contains
	caption_box.appendChild(caption);

	//Styling the topic box
	var topic_box = document.createElement("div");
	topic_box.classList.add("topic_box");
	topic_box.style.width = "20%";
	topic_box.style.height = "20px";
	topic_box.style.margin = "0px";
	topic_box.style.padding = "20px";
	topic_box.style.borderRight = "1px solid #D9D0D9";
	topic_box.style.display = "table";
	topic_box.style.hyphens = "auto";

	//Styling the main topic
	var main_caption = document.createElement("h3");
	main_caption.innerHTML = doc.data().mainTopic;
	main_caption.style.paddingRight = "700px";
	main_caption.style.padding = "0px";
	main_caption.style.margin = "0px";
	main_caption.style.fontFamily = "'Open Sans Condensed', sans-serif";
	main_caption.style.wordWrap = "break-word";

	var username = document.createElement("h4");
	username.innerHTML = doc.data().nameText;
	username.style.fontFamily = "'Open Sans Condensed', sans-serif";
	username.style.wordWrap = "break-word";
	username.style.paddingRight = "700px";
	username.style.padding = "0px";
	username.style.margin = "0px";
	username.style.marginLeft= "78%";

	//Creating and styling the reply button
	var reply = document.createElement("INPUT");
	reply.setAttribute("type", "submit");
	reply.value = "Comment";
	reply.id = string_id.concat("_commenting");
	var reply_id = reply.id

	reply.style.cssFloat = "right";
	reply.style.marginRight = "5%";
	reply.style.border = "0px";
	reply.style.color = "#F0F0F0";
    reply.style.backgroundColor = "darkred";
	reply.style.padding = "6px";
	reply.style.borderRadius = "3px";
	reply.style.fontFamily = "'Open Sans Condensed', sans-serif";

	


	//calls respond function the moment you click the button
	reply.addEventListener("click", function() {
		Respond(comment_id, doc, reply_id);
	});

	//Date note

	var date_node = document.createElement("p");
	var date = new Date();
	date_node.innerHTML = date;
    date_node.style.fontSize = 13 + "px";
    date_node.style.position = "absolute";
    date_node.style.left = 10 + "px";
    date_node.style.bottom = -7.5 + "px";

	

	//Appending everything and getting IDs
	caption_box.appendChild(date_node);
	caption_box.appendChild(reply);
	topic_box.appendChild(main_caption);
	caption_box.appendChild(username);
	
	post_box.appendChild(topic_box);
	post_box.appendChild(caption_box);
	console.log(post_box);
	overalldiv.appendChild(post_box);
	overalldiv.appendChild(commentdiv);

	
	document.getElementById("container").appendChild(overalldiv);
	//document.getElementById("container").appendChild(commentdiv);

	var caption_box_id = doc.id; 
	caption_box.id = caption_box_id;

	var topic_box_id = doc.id;
	topic_box.id = topic_box_id;
}

//the moment you click on the comment button
function Respond(comment_id, doc, reply_id) {

  		console.log(comment_id);
  		var comments_div_info = document.getElementById(comment_id);
  		var toggle = document.getElementById(comment_id)
  		if (toggle.style.display ==="none") {
  			toggle.style.display = "block";
  			document.querySelector("#comment_div").style.display = "block";
  			console.log("showing");
  		} else {
  			toggle.style.display = "none";
  			document.querySelector("#comment_div").style.display = "none";
  			console.log("hiding");
  		}
  		var text_input_comment = document.getElementById("comment_div");
  		text_input_comment.setAttribute("c_id", comment_id);

		post_id_comment = doc.id;
		console.log(post_id_comment);


		if (!comments_div_info.classList.contains("hascomments")) {
			loadComments(post_id_comment, doc);
			comments_div_info.classList.add("hascomments");
		}

		
		document.querySelector("#comment_div").style.marginLeft = "27%";
		document.querySelector("#comment_div").style.marginTop = "1%";
		document.querySelector("#comment_div").style.marginBottom = "1%";
		document.querySelector("#comment_div").style.height = "10%";
		console.log(3);
		$("#comment_div").insertAfter(document.getElementById(post_id_comment))
		

		
	}

//Saving your comment to the database

$("#response_div_form").submit(function(e) {
			e.preventDefault();
			console.log('2')
			var comment_input = document.getElementById("respond_here");
			var comment_input_text = comment_input.value;
			console.log("commentingsubmit");
			console.log('2.1')
			saveReplyToDatabase(post_id_comment, comment_input_text);

			

			comment_input.value = ""
});
	function saveReplyToDatabase(post_id_comment, comment_input_text) {
	console.log('3')

	doc_replies = db.collection("forum_posts").doc(post_id_comment).collection("response").add({
		responseText: comment_input_text
	})
	.then(function(doc){
		var post_id_comment = doc.id
		console.log("hi",post_id_comment);
			doc.get().then(function(doc) {
			    // Document was found in the cache. If no cached document exists,
			    // an error will be returned to the 'catch' block below.
			    console.log("Cached document data:", doc.data());

			addComment(doc);
			location.reload();
			//document.querySelector("#comment_div").style.display = "none";
			console.log('5')
			})
		})
	
}

//appending the reply to the page
function addComment(doc) {
	 
	 var comment_box = document.createElement("div");
	 var reply_text = document.createElement("p");
	 reply_text.innerHTML = doc.data().responseText;
	 x =  reply_text.innerHTML
	 console.log(doc.data())
	 comment_box.append(x);
	 comment_box.style.backgroundColor = "#F0F0F0";
	 comment_box.style.width = "60%";
	 comment_box.style.marginLeft= "27%";
	 comment_box.style.paddingTop = "20px";
	 comment_box.style.paddingBottom = "40px";
	 comment_box.style.marginBottom = "5px";
	 comment_box.style.border = "1px solid #D9D0D9";
	 comment_box.style.paddingLeft = "20px";
	 comment_box.style.flex = "1";
	 comment_box.style.height = "auto";
	 comment_box.id = "id";
	 var id_attribute = document.getElementById("comment_div").getAttribute("c_id");
	 document.getElementById(id_attribute).appendChild(comment_box);
	
	 	
}



//
function options() {
	var x = document.getElementById("forum_options");
  		if (x.className.indexOf("forum-show") == -1) {  
    		x.className += " forum-show";
    		document.querySelector("#forum_options").style.display = "inline-block";
  		} else { 
    		x.className = x.className.replace(" forum-show", "");
    		document.querySelector("#forum_options").style.display = "none";
  	}
}

//Searching through the system
function LoopThroughPosts(post_str, topic_str, post_id) {
	db.collection("forum_posts").get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {

			var post_str = doc.data().postText;
			var under_post_str = post_str.toLowerCase();
			console.log(post_str);
			var search_input = document.getElementById("search_bar")
			var search_value = search_input.value;
			console.log(search_value);
			var search_string = (String(search_value));
			var under_search_string = search_string.toLowerCase();
			console.log(search_string);
			var topic_str = doc.data().mainTopic;
			console.log(doc.data().mainTopic);
			console.log(under_post_str.includes(under_search_string));
			if(under_post_str.includes(under_search_string)) {
				console.log ("display");
				var post_id = doc.id;
				document.getElementById(post_id).style.display = "block";
				
			} else {
				console.log ("remove");
				var post_id = doc.id;
				console.log(post_id);
				document.getElementById(post_id).style.display = "none";
			}
		})
	})
}

//Calls function immediately when someone searches
$("#search").submit(function(e) {
	e.preventDefault();
	console.log("searching");
	LoopThroughPosts();
});

//Loading posts and comments
function loadPosts(post_id_comment, doc){
  db.collection("forum_posts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    	post_id_comment = doc.id;
    	console.log(post_id_comment);
        addNewItem(doc);
        //addComment(doc_replies, postAndCommentdiv)
        
    });
  });
};

function loadComments(post_id_comment, doc) {
	console.log(post_id_comment);
	var k = String(post_id_comment);
	console.log(k);
	console.log('3')
	db.collection("forum_posts").doc(post_id_comment).collection("response").get().then(function(querySnapshot) {
		console.log(querySnapshot);
		 querySnapshot.forEach(function(doc) {
			addComment(doc, post_id_comment)
		 })
	})
}

//moment page loads, everything comes up
$(document).ready(function(){
  loadPosts();
});

//Styling topics
function shadeBlack(x) {
	x.style.color = "black";
	document.getElementById("option_chosen").style.color = "#5E5E5E";
}

function reshade(x) {
	x.style.color = "#5E5E5E"
	document.getElementById("option_chosen").style.color = "black";
}

window.addEventListener('load', function () {console.log("pop-up login")});
