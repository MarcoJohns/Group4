
/////////////////// Yelp Summer Reviews API's ////////////////////////
                // dont touch //


// JANS MTN BIKE
var mtnBikeURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/-3LZfDFYPE9aXPc0Hn-4UA/reviews"
$.ajax({
    url: mtnBikeURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {
    console.log(response)
    var results = response.reviews[0].rating
    var comments = response.reviews[2].text
    $("#mtn-bike-reviews").append("Yelp review: ");
    $("#mtn-bike-reviews").append(results);
    $("#mtn-bike-reviews").append(" / 5 Stars")
    $("#mtn-bike-CustomerComment").append("Customer Reviews: ").append(comments);
});

// Zip Line
var ziplineURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/djjBf3bV_-yJPjElIULh5w/reviews"
$.ajax({
    url: ziplineURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {
    
    var results = response.reviews[0].rating
    var comments = response.reviews[0].text
    $("#zip-line-reviews").append("Yelp review: ");
    $("#zip-line-reviews").append(results);
    $("#zip-line-reviews").append(" / 5 Stars")
    $("#zip-line-CustomerComment").append("Customer Reviews: ").append(comments);
});

// golf 
var golfURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/9qOo7I8OkWQ_CVot1HbHiA/reviews"
$.ajax({
    url: golfURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[1].text
    $("#golf-course-reviews").append("Yelp review: ");
    $("#golf-course-reviews").append(results);
    $("#golf-course-reviews").append(" / 5 Stars")
    $("#golf-course-CustomerComment").append("Customer Reviews: ").append(comments);
});


// Alpine Slide
var alpineSlideURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/djjBf3bV_-yJPjElIULh5w/reviews"
$.ajax({
    url: alpineSlideURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[1].text
    $("#alpine-slide-reviews").append("Yelp review: ");
    $("#alpine-slide-reviews").append(results);
    $("#alpine-slide-reviews").append(" / 5 Stars")
    $("#alpine-slide-CustomerComment").append("Customer Reviews: ").append(comments);
    console.log(response.reviews)
});

// ropes course
var ropesCourseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/XrmFMW6UoRBTUbB8lD3vdg/reviews"
$.ajax({
    url: ropesCourseURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[0].text
    $("#ropes-course-reviews").append("Yelp review: ");
    $("#ropes-course-reviews").append(results);
    $("#ropes-course-reviews").append(" / 5 Stars")
    $("#ropes-course-CustomerComment").append("Customer Reviews: ").append(comments);

});

////////////////// End of Yelp Reviews API's /////////////////////////







