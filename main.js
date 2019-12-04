// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyCwnxq2eqg2N2MuuyYCPpH0QjIQurZHZt4",
    authDomain: "project-3103617646253468339.firebaseapp.com",
    databaseURL: "https://project-3103617646253468339.firebaseio.com",
    projectId: "project-3103617646253468339",
    storageBucket: "project-3103617646253468339.appspot.com",
    messagingSenderId: "493911622643"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact88');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	comment: $('.com99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});

