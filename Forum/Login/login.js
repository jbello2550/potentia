//start of code
$('#login').submit(function (e){
  e.preventDefault();
 
 var email = document.getElementById("eusername").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function() {
     window.location = "http://potentia.me/Forum/Forum.html";
  })
  .catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  console.log(email, password)

  /*firebase.auth().onAuthStateChanged(function(user) {
    
    var user = firebase.auth().currentUser;
    
  if (user != null) {
    uid = user.uid;
  } else {
  // No user is signed in.
  }

  });

  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
  });*/

});

$('#logout').submit(function(e){

  firebase.auth().signOut().then(function() {
  window.location = "http://potentia.me/Forum/Forum.html";
  console.log('Signed Out');
  }, function(error) {
  console.error('Sign Out Error', error);
});

});


$('#signup').submit(function(e){
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("passwords").value;
 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  document.getElementById("email").value = "";
  document.getElementById("passwords").value = "";
});
