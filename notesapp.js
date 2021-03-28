
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
// firebase.analytics(); 
 const auth = firebase.auth();
 
 function signUp(){
	var Email= document.getElementById("email");
	var pass= document.getElementById("password");
	const promise = auth.createUserWithEmailAndPassword(Email.value,pass.value);
	promise.catch(e => alert(e.message +" Try again."));// alert us if any error occur i.e wrong format of email or password is < 6 characters
	promise.then(user => {
		console.log(user);
		alert("Signed Up");
		window.location.href="finalhomepage.html";
	})}
 
 function signIn(){
	var Email=document.getElementById("email");
	var pass=document.getElementById("password");
const promise = auth.signInWithEmailAndPassword(Email.value,pass.value);
promise.catch(e => alert(e.message));
promise.then( user => {
	console.log("Signed In as " + Email.value);
	window.location.href="finalhomepage.html"
})
}
function SignOut() {	
 auth.signOut().then(() => {
	 alert("Thankyou...");
	 window.location.href="noteslogin.html";
 })
}
 function reset() {
	var emailAddress=document.getElementById("passreset");
	if(emailAddress !=""){
		const resetreq = auth.sendPasswordResetEmail(emailAddress.value);
		resetreq.then(function () {
			alert("We sent an email with a link to get back into your account.")
		})
		resetreq.catch(e => alert(e.message));
	}
 }












