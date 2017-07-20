var Yelp = require('yelpv3');

var yelp = new Yelp({
  app_id: 'hnAox4KQN8oBc_MWveKs4Q',
  app_secret: 'Z6Bws60RuiqpnOB9Mkh4sCbj5UfIMwmlcU1st1NSQRF72UMF2zuaqP5lTtzoKgiH'
});

// https://www.yelp.com/developers/documentation/v3/business_search
yelp.search({term: 'food', location: '90210', limit: 10})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error(err);
});

// // https://www.yelp.com/developers/documentation/v3/business_search_phone
// yelp.phoneSearch({phone: '+14159083801'})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://www.yelp.com/developers/documentation/v3/transactions_search
// yelp.transactionSearch('delivery', {location: 'Boston'})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://www.yelp.com/developers/documentation/v3/business
// yelp.business('yuko-kitchen-los-angeles')
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://www.yelp.com/developers/documentation/v3/business_reviews
// yelp.reviews('yuko-kitchen-los-angeles')
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://www.yelp.com/developers/documentation/v3/autocomplete
// yelp.autocomplete({text: 'Pizz', latitude: 40.71,longitude: 74.00})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});