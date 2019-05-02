// this function imports the Navigation bar and will concatenate it with the header.

var xhr1 = new XMLHttpRequest(); //Create XMLHttpRequest object

xhr1.onload = function () {
    // When readystate changes

    // Testing the console Status
    console.log("1 " + xhr1.status);


    responseObject = JSON.parse(xhr1.responseText);


    var newContent = '';
    for (var i = 0; i < responseObject.navData.length; i++) {

        // Loop through object
        newContent += '<div class="navBar">';

        newContent += '<a href="' + responseObject.navData[i].link + '" class="navLink" > ' + responseObject.navData[i].text + ' </a>';

        newContent += '</div>';
    }


    // Update the page with the new content
    document.getElementById('navData').innerHTML = newContent;


};

//xhr1.open('GET', '../scripts/bookData.json', true);
xhr1.open('GET', '../scripts/navData.json', true); // Prepare the request

xhr1.send(null);
// Send the request



//the following function imports the Cover art, book titles, release dates, and image descriptions.

var xhr = new XMLHttpRequest(); //Create XMLHttpRequest object

xhr.onload = function () {
    // When readystate changes

    // Testing the console Status
    console.log(xhr.status);


    responseObject = JSON.parse(xhr.responseText);


    var newContent = '';
    for (var i = 0; i < responseObject.book.length; i++) {

        // Loop through object
        newContent += '<div class="event">';

        newContent += '<img class="coverArt" src="' +
            responseObject.book[i].cover + '" ';

        newContent += 'alt="' +

            responseObject.book[i].title + '" />';

        newContent += '<p class= "subComments"><b>' +

            responseObject.book[i].title + '</b><br>';

        newContent += responseObject.book[i].release + '</p>';

        newContent += responseObject.book[i].subComments + '</p>';

        newContent += '</div>';
    }


    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;


};


xhr.open('GET', '../scripts/bookData.json', true); // Prepare the request

xhr.send(null);
// Send the request
