const mongoose = require('mongoose');
let rawCovidData = require('./covidFeaturesYelp.js')


mongoose.connect('mongodb://localhost/covidData', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });




const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!


  const covidDataSchema = new mongoose.Schema({
    business_id: String,
    highlights: String,
    delivery_or_takeout: String,
    Grubhub_enabled: String,
    Call_To_Action_enabled: String,
    Request_a_Quote_Enabled: String,
    Covid_Banner: String,
    Temporary_Closed_Until: String,
    Virtual_Services_Offered: String
  });
  const CovidData = mongoose.model('CovidData', covidDataSchema);

  //     {"business_id":"9kXRUIkwdDtnAPO6tVo51g","highlights":"FALSE","delivery or takeout":"FALSE","Grubhub enabled":"FALSE","Call To Action enabled":"FALSE","Request a Quote Enabled":"FALSE","Covid Banner":"FALSE","Temporary Closed Until":"FALSE","Virtual Services Offered":"FALSE"},


  for (let i = 0; i < rawCovidData.covidData.length; i++) {
    // console.log(rawCovidData.covidData[i]['business_id'])
    let restaurantCovidData = new CovidData({
      business_id: rawCovidData.covidData[i]['business_id'],
      highlights: rawCovidData.covidData[i]["highlights"],
      delivery_or_takeout: rawCovidData.covidData[i]["delivery or takeout"],
      Grubhub_enabled: rawCovidData.covidData[i]["Grubhub enabled"],
      Call_To_Action_enabled: rawCovidData.covidData[i]["Call To Action enabled"],
      Request_a_Quote_Enabled: rawCovidData.covidData[i]["Request a Quote Enabled"],
      Covid_Banner: rawCovidData.covidData[i]["Covid Banner"],
      Temporary_Closed_Until: rawCovidData.covidData[i]["Temporary Closed Until"],
      Virtual_Services_Offered: rawCovidData.covidData[i]["Virtual Services Offered"]
    });
  
    restaurantCovidData.save(function (err, restaurantCovidData) {
      if (err) {
          return console.error(err);
      } else {
        console.log(i)
      }
    });
  }



  
});
