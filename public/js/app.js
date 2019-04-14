var config = {
  apiKey: "AIzaSyDwsiBZGevmY6EaLHBWC6umBC2C3tGi_KI",
  authDomain: "adp-app-ee6e4.firebaseapp.com",
  databaseURL: "https://adp-app-ee6e4.firebaseio.com",
  projectId: "adp-app-ee6e4",
  storageBucket: "adp-app-ee6e4.appspot.com",
  messagingSenderId: "54366756977"
};
firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL; 

$("#btn-login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error)
   {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorCode);
       console.log(errorMessage);
   });


});

function switchView(view){
  $.get({
    url:view,
    Cache: false,
  }).then(function(data){
    $("$container").html(data);
  });
}