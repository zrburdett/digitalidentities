// Database and reference variables for Firebase
var database;
var storage;
var ref;

// Form input variables
var input1;
var input2;
var input3;
var submitButton;

function setup() {
    // Initialize Firebase config
    var config = {
        apiKey: "AIzaSyCLCtrfymafzgxNQCJpUVSEnmWiZAgbP84",
        authDomain: "digital-identities.firebaseapp.com",
        databaseURL: "https://digital-identities.firebaseio.com",
        projectId: "digital-identities",
        storageBucket: "digital-identities.appspot.com",
        messagingSenderId: "834438338603"
    };

    // Initialize firebase using config
    firebase.initializeApp(config);

    // Create a database variable for firebase
    database = firebase.database();

    // Create a storage variable for firebase
    storage = firebase.storage();

    // Create inputs and buttons
    input1 = createInput('input1');
    input2 = createInput('input2');
    input3 = createInput('input3');
    submitButton = createButton('submit');

    // When the submitButton is pressed, call the submitData function
    submitButton.mousePressed(submitData);

    // Grab the button HTML elements from index.html and save as variable
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');
    const btnSubmit = document.getElementById('btnSubmit');

    // Create canvas
    createCanvas(innerWidth,innerHeight);

    // Draw the gradient background
    gradientBackground('#35a2f1', '#7e24ce');

    // Login event listener to log a user in anonymously
    btnLogin.addEventListener('click', e => {
        firebase.auth().signInAnonymously();
        console.log("Anonymous user logged in.");
    });

    // Logout event listener to log a user out
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        console.log("Anonymous user logged out.");
    });

    // Submit event listener to upload image
    btnSubmit.addEventListener('click', e => {
        uploadImg();
    });

    // Log the current user when the authentication state has changed
    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log("Current user:");
        console.log(firebaseUser);
    });

}

function draw() {}

function submitData() {
    // Create a javascript object that contains the data
    var data = {
        question1: input1.value(),
        question2: input2.value(),
        question3: input3.value()
    }

    // See what's being sent
    console.log("Following data is being sent to the database:");
    console.log(data);

    // Create a reference to the database
    ref = database.ref('users/' + firebase.auth().currentUser.uid );

    // Push the data to the database
    ref.push(data);

    // Confirm send
    console.log("Data sent.");
}

function uploadImg() {
    // Create storage reference in the database
    var storageRef = storage.ref('test/' + firebase.auth().currentUser.uid);

    // Select the canvas in the document
    const canvas = document.getElementById('defaultCanvas0');

    // Convert the canvas into a blob and upload it using the storageRef
    canvas.toBlob(function(canvasBlob){
        // Upload the image using the newly created blob
        var uploadTask = storageRef.put(canvasBlob);

        // Confirmations
        console.log("Sending the following blob:");
        console.log(canvasBlob);
        console.log("Blob location: " + storageRef);
    });
}

function gradientBackground(from, to) {
    for(var i = 0; i < innerWidth; i++) {
        noStroke();
        fill(lerpColor(color(from), color(to), (i/innerHeight)));
        rectMode(CORNER);
        rect(i, 0, 1, innerHeight);
    }
}