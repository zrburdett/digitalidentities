var database;
var ref;

var input1;
var input2;
var input3;
var submitButton;

function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCLCtrfymafzgxNQCJpUVSEnmWiZAgbP84",
        authDomain: "digital-identities.firebaseapp.com",
        databaseURL: "https://digital-identities.firebaseio.com",
        projectId: "digital-identities",
        storageBucket: "digital-identities.appspot.com",
        messagingSenderId: "834438338603"
    };

    firebase.initializeApp(config);

    // Create a database variable from firebase
    database = firebase.database();

    // Create inputs and buttons
    input1 = createInput('input1');
    input2 = createInput('input2');
    input3 = createInput('input3');
    submitButton = createButton('submit');

    // When the submitButton is pressed, call the submitData function
    submitButton.mousePressed(submitData);

    // Testing to see the firebase object
    //console.log(firebase);

    // Reference test1
    ref = database.ref('test1');

    // On the event of value, have two callbacks of 1) a function to receive the data, 2) a function if there's an error
    ref.on('value', gotData, errData);
}

function draw() {

}

function submitData() {
    // Create a javascript object that contains the data
    var data = {
        question1: input1.value(),
        question2: input2.value(),
        question3: input3.value()
    }

    // See what's being sent
    console.log(data);

    // Create a reference to the database
    ref = database.ref('test1');

    // Push the data to the database
    ref.push(data);
}

function gotData(data) {
    //console.log(data.val());
    var results = data.val();
    var keys = Object.keys(results);
    console.log(keys);

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var ans1 = results[k].question1;
        var ans2 = results[k].question2;
        var ans3 = results[k].question3;
        console.log(ans1, ans2, ans3);
    }
}

function errData(err) {
    console.log('Error!');
    console.log(err);
}