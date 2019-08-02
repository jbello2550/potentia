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

$("#post").submit(function(e) {
  e.preventDefault();

  var post_input = document.getElementById("post_here");
  var post_text = post_input.value

  var main_topic = document.getElementById("topic_text");
  var main_topic_text = main_topic.value

  saveItemToDatabase(post_text, main_topic_text);

  post_input.value = ""
  main_topic.value = ""
});

function saveItemToDatabase(post_text, main_topic_text){
	doc = db.collection("forum_posts").add({
		postText: post_text,
		mainTopic: main_topic_text
	})
	.then(function(docRef){
		docRef.get().then(function(doc) {
			addNewItem(doc);

		});
	});
}

function addNewItem(doc){
	var post_box = document.createElement("div");
	post_box.classList.add("post_box");
	post_box.style.marginLeft = "12vw";
	//post_box.style.backgroundColor = "#F0F0F0";
	post_box.style.width = "75%";
	post_box.style.paddingTop = "0px";
	post_box.style.paddingBottom = "3px";
	post_box.style.marginBottom = "5px";
	post_box.style.border = "1px solid #D9D0D9";
	post_box.style.paddingLeft = "20px";
	post_box.style.flex = "1";
	post_box.style.height = "120px"

    var caption_box = document.createElement("div");
	caption_box.classList.add("caption_box");

	var caption = document.createElement("p");
	caption.innerHTML = doc.data().postText;
	caption.style.marginLeft = "20%";
	caption.style.marginTop = "-60px";
        caption.style.fontSize = 14 + 'px';
        caption.style.fontFamily = "Verdana, Geneva, sans-serif";

	caption_box.appendChild(caption);

	var topic_box = document.createElement("div");
	topic_box.classList.add("topic_box");
	topic_box.style.width = "100px";
	topic_box.style.height = "104%";
	topic_box.style.marginTop = "-20px";
	topic_box.style.borderRight = "1px solid #D9D0D9"

	var main_caption = document.createElement("h3");
	main_caption.innerHTML = doc.data().mainTopic;
	main_caption.style.paddingRight = "700px";
	main_caption.style.paddingTop = "40px";
        main_caption.style.fontFamily = "Verdana, Geneva, sans-serif";
        main_caption.style.fontSize = 14 + 'px';

	var reply = document.createElement("INPUT");
	reply.setAttribute("type", "submit");
	reply.value = "Comment";
	reply.style.cssFloat = "right";
	reply.style.marginRight = "15px";
	reply.style.border = "0px";
	reply.style.color = "#F0F0F0";
	reply.style.backgroundColor = "darkred";
	reply.style.padding = "6px";
	reply.style.borderRadius = "3px";
	reply.style.marginTop = "-20px";
        reply.style.fontFamily = "Verdana, Geneva, sans-serif";
        reply.style.fontSize = 14 + 'px';

	topic_box.appendChild(main_caption);

	post_box.appendChild(topic_box);
	post_box.appendChild(caption_box);
	post_box.appendChild(reply);

	var post_id = doc.id;
	post_box.id = post_id;

	console.log(post_id);


	document.getElementById("container").appendChild(post_box);

	var caption_box_id = doc.id; 
	caption_box.id = caption_box_id;

	var topic_box_id = doc.id;
	topic_box.id = topic_box_id;
}

function options() {
	document.querySelector("#forum_options").style.display = "inline-block";
}

function LoopThroughPosts(post_str, topic_str, post_id) {
	db.collection("forum_posts").get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			var post_str = doc.data().postText;
			console.log(post_str);
			var search_input = document.getElementById("search_bar")
			var search_value = search_input.value;
			console.log(search_value);
			var search_string = (String(search_value));
			console.log(search_string);
			var topic_str = doc.data().mainTopic;
			console.log(post_str.includes(search_string));
			if(post_str.includes(search_string)) {
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

$("#search").submit(function(e) {
	e.preventDefault();
	console.log("searching");
	LoopThroughPosts();
});

function loadPosts(){
  db.collection("forum_posts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        addNewItem(doc);
    });
  });
};

$(document).ready(function(){
  loadPosts()
});
