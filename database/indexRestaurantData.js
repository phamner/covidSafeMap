const mongoose = require('mongoose');
let rawRestaurantData =  require('./restaurantDataYelp.js'); 

console.log('restaurant data: ', rawRestaurantData.restaurantData.length)


mongoose.connect('mongodb://localhost/restaurantData', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


// restaurant data: {"business_id":"f9NumwFMBDn751xgFiRbNA","name":"The Range At Lake Norman","address":"10913 Bailey Rd","city":"Cornelius","state":"NC","postal_code":"28031","latitude":35.4627242,"longitude":-80.8526119,"stars":3.5,"review_count":36,"is_open":1,"attributes":{"BusinessAcceptsCreditCards":"True","BikeParking":"True","GoodForKids":"False","BusinessParking":"{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}","ByAppointmentOnly":"False","RestaurantsPriceRange2":"3"},"categories":"Active Life, Gun\/Rifle Ranges, Guns & Ammo, Shopping","hours":{"Monday":"10:0-18:0","Tuesday":"11:0-20:0","Wednesday":"10:0-18:0","Thursday":"11:0-20:0","Friday":"11:0-20:0","Saturday":"11:0-20:0","Sunday":"13:0-18:0"}},


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!


  const restaurantDataSchema = new mongoose.Schema({
      "business_id":"f9NumwFMBDn751xgFiRbNA",
      "name":"The Range At Lake Norman",
      "address":"10913 Bailey Rd",
      "city":"Cornelius",
      "state":"NC",
      "postal_code":"28031",
      "latitude":35.4627242,
      "longitude":-80.8526119,
      "stars":3.5,
      "review_count":36,
      "is_open":1,
      "attributes":{
          "BusinessAcceptsCreditCards":"True",
          "BikeParking":"True",
          "GoodForKids":"False",
          "BusinessParking":"{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
          "ByAppointmentOnly":"False",
          "RestaurantsPriceRange2":"3"
        },
        "categories":"Active Life, Gun\/Rifle Ranges, Guns & Ammo, Shopping",
        "hours":{
            "Monday":"10:0-18:0",
            "Tuesday":"11:0-20:0",
            "Wednesday":"10:0-18:0",
            "Thursday":"11:0-20:0",
            "Friday":"11:0-20:0",
            "Saturday":"11:0-20:0",
            "Sunday":"13:0-18:0"
        }
    });
  const RestaurantData = mongoose.model('RestaurantData', restaurantDataSchema);



  // for (let i = 0; i < rawCovidData.covidData.length; i++) {
  //   // console.log(rawCovidData.covidData[i]['business_id'])
  //   let restaurantCovidData = new CovidData({
  //     business_id: rawCovidData.covidData[i]['business_id'],
  //     highlights: rawCovidData.covidData[i]["highlights"],
  //     delivery_or_takeout: rawCovidData.covidData[i]["delivery or takeout"],
  //     Grubhub_enabled: rawCovidData.covidData[i]["Grubhub enabled"],
  //     Call_To_Action_enabled: rawCovidData.covidData[i]["Call To Action enabled"],
  //     Request_a_Quote_Enabled: rawCovidData.covidData[i]["Request a Quote Enabled"],
  //     Covid_Banner: rawCovidData.covidData[i]["Covid Banner"],
  //     Temporary_Closed_Until: rawCovidData.covidData[i]["Temporary Closed Until"],
  //     Virtual_Services_Offered: rawCovidData.covidData[i]["Virtual Services Offered"]
  //   });
  
  //   restaurantCovidData.save(function (err, restaurantCovidData) {
  //     if (err) {
  //         return console.error(err);
  //     } else {
  //       console.log(i)
  //     }
  //   });
  // }



  
});
