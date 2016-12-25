// from https://www.twilio.com/docs/quickstart/node/programmable-sms#sending-an-sms-message

// Load dotenv
var dotenv = require('dotenv').config();

// Twilio Credentials 
var accountSid = dotenv.TWILIO_ACCOUNT_SID; 
var authToken = dotenv.TWILIO_AUTH_TOKEN; 

// Constants
var MANEESH = "+17013615368"
var TED = "+17013531729"
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: MANEESH, 
    from: TED, 
    body: "Hey dude this is Ted!", 
}, function(err, message) { 
    console.log(message.sid);
});