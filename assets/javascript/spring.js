//Deer Valley//
var deerValleyURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/4utuWi6qEHQdJU68SKU2dw/reviews"
$.ajax({
    url: deerValleyURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {
    

    var results = response.reviews[0].rating
    console.log(results);
    var comments = response.reviews[2].text
    console.log(comments);
    $("#redPineReviews").append("Yelp review: ");
    $("#redPineReviews").append(results);
    $("#redPineReviews").append("/5")
    $("#redPineCustomerComment").append("Customer Reviews: ").append(comments);
});

// Olympic Park
var olympicParkURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/XrmFMW6UoRBTUbB8lD3vdg/reviews"
$.ajax({
    url: olympicParkURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    // var totalReviews = response.
    var results = response.reviews[0].rating
    console.log(results);
    var comments = response.reviews[2].text
    $("#canyonsReviews").append("Yelp review: ");
    $("#canyonsReviews").append(results);
    $("#canyonsReviews").append("/5")
    $("#canyonsCustomerComment").append("Customer Comments: ").append(comments);
});

// Canyons Village
var canyonURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/GExfHOQpyNdIqpSq8mvFVA/reviews"
$.ajax({
    // has no reviews
    url: canyonURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[0].text
    var results = response.reviews[0].rating
    $("#soldierHollowReviews").append("Yelp review: ");
    $("#soldierHollowReviews").append(results);
    $("#soldierHollowReviews").append("/5")
    $("#soldierCustomerComment").append("Customer Comments: ").append(comments);
});

// Fly Fishing
var flyFishingURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/P9qws2eTzl0m6ArCX3adJQ/reviews"
$.ajax({
    url: flyFishingURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[2].text
    var results = response.reviews[0].rating
    $("#lunaLobosReviews").append("Yelp review: ");
    $("#lunaLobosReviews").append(results);
    $("#lunaLobosReviews").append("/5")
    $("#lunaCustomerComment").append("Customer Comments: ").append(comments);
});

// Swaner Preserve
var swanerURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/4HyfZpxI_yAyoZ3bSFKjMg/reviews"
$.ajax({
    url: swanerURL,
    method: "GET",
    beforeSend : function( xhr ) {
        xhr.setRequestHeader( 'Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx' );
    }
}).then(function(response) {

    var comments = response.reviews[0].text
    var results = response.reviews[0].rating
    $("#mainstreetReviews").append("Yelp review: ");
    $("#mainstreetReviews").append(results);
    $("#mainstreetReviews").append("/5")
    $("#mainStreetCustomerComment").append("Customer Comments: ").append(comments);

});

//////////////////// End of Yelp Reviews API's ///////////////////////



// weather API
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=84060&appid=63cb4b4f89b17591871bc3bc7aa807f0"
$.ajax({
    url: weatherURL,
    method: "GET"
}).then(function(response) {

    var weatherResults = response.data;

    // we can pull "main" for current temp
    // we can pull "weather" for the sky forcast
    console.log(response);
})
