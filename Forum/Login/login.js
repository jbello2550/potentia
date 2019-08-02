//start of code

$('#login').submit(function (e){
  e.preventDefault();
 
 var email = document.getElementById("eusername").value;
  var password = document.getElementById("password").value;

  console.log("Email", email, "Password", password)

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // User is signed in.
    } else {
    // No user is signed in.
    }
  });

    var user = firebase.auth().currentUser;
    
  if (user != null) {
    uid = user.uid;
  } else {
  // No user is signed in.
  }


  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
  // An error happened.
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
