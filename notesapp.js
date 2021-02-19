
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
   apiKey: "AIzaSyDKzDTZOMSocDPsd4s6IQWx26ZnIejWzLo",
   authDomain: "notesapp-72493.firebaseapp.com",
   projectId: "notesapp-72493",
   storageBucket: "notesapp-72493.appspot.com",
   messagingSenderId: "68655298913",
   appId: "1:68655298913:web:5c8fedf423c27e13252d20",
   measurementId: "G-D8QWSWYMN9"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 const auth=firebase.auth();

 function singUp(){
	 var email=document.getElementById("email");
	var pass=document.getElementById("password");
const promise =auth.createUserWithEmailAndPassword(email.value,pass.value);
 promise.catch(e => alert(e.message));// alert us if any error occur i.e wrong format of email or password is < 6 characters
alert("Signed Up");
 }
 
 function singIn(){
	var email=document.getElementById("email");
	var pass=document.getElementById("password");
firebase.auth.signInWithEmailAndPassword(email.value,pass.value);
promise.catch(e => alert(e.message));
alert("Signed In as" + email);
 }


function singOut () {
	auth.signOut();
	alert("Thank you..")
}
// taking user to new page/home page after signing in.
auth.onAuthStateChanged(function(user){
	if(user){
		// signed in
		var email=user.email;
		alert("Active user"+email);
	} 
	else{
		// no user is signed in
		alert("Not registered.")
	}
});