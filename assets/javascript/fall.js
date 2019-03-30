/////////////////// Yelp Summer Reviews API's ////////////////////////
// dont touch //


// JANS Fishing
var fishingURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/RIb5dysqapFn2AfUk6xHww/reviews"
$.ajax({
    url: fishingURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {
    console.log(response)
    var results = response.reviews[0].rating
    var comments = response.reviews[2].text
    $("#onthefly-reviews").append("Yelp review: ");
    $("#onthefly-reviews").append(results);
    $("#onthefly-reviews").append(" / 5 Stars")
    $("#onthefly-CustomerComment").append("Customer Reviews: ").append(comments);
});

// Horseback Riding
var horsebackURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/0lUzB0wUu23sZf2eVi_zTQ/reviews"
$.ajax({
    url: horsebackURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[0].text
    $("#KBHorses-reviews").append("Yelp review: ");
    $("#KBHorses-reviews").append(results);
    $("#KBHorses-reviews").append(" / 5 Stars")
    $("#KBHorses-CustomerComment").append("Customer Reviews: ").append(comments);
});

// Bike Riding
var bikeRidingURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/4v_Rx0kXeZVbh5uRbRjzzw/reviews"
$.ajax({
    url: bikeRidingURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[1].text
    $("#electricBikes-reviews").append("Yelp review: ");
    $("#electricBikes-reviews").append(results);
    $("#electricBikes-reviews").append(" / 5 Stars")
    $("#electricBikes-CustomerComment").append("Customer Reviews: ").append(comments);
});


// Hot Air Balloon
var hotairURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/f3omPJOC6qVHJYfO5-fmfA/reviews"
$.ajax({
    url: hotairURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[1].text
    $("#airballoons-reviews").append("Yelp review: ");
    $("#airballoons-reviews").append(results);
    $("#airballoons-reviews").append(" / 5 Stars")
    $("#airballoons-CustomerComment").append("Customer Reviews: ").append(comments);
    console.log(response.reviews)
});

// Olympic Course
var olympicCourseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/XrmFMW6UoRBTUbB8lD3vdg/reviews"
$.ajax({
    url: olympicCourseURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer j3QDUJWKmXUv1kEjl0O3GYPAxmQj5qCJ5jPrmS3gaiNjjvISBdIiZuyPBF-Wf5tVx5XJGginvUNa6XGHXpxepLRFBhHedV2YDCif9vHqDWl5loFu3txnueYqHoeZXHYx');
    }
}).then(function (response) {

    var results = response.reviews[0].rating
    var comments = response.reviews[0].text
    $("#bobsled-reviews").append("Yelp review: ");
    $("#bobsled-reviews").append(results);
    $("#bobsled-reviews").append(" / 5 Stars")
    $("#bobsled-CustomerComment").append("Customer Reviews: ").append(comments);

});


////////////////// End of Yelp Reviews API's /////////////////////////