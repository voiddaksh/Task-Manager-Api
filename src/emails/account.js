var postmark = require("postmark");
require("dotenv").config();
// var serverToken = "a8b6f0ca-3e7b-466e-90bb-9ab934824219"
// const serverToken = process.env.SERVER_TOKEN;
const postmarkServerToken = process.env.POSTMARK_SERVER_TOKEN;
const client = new postmark.Client(postmarkServerToken);
// var client = new postmark.ServerClient(process.env.serverToken);

const sendWelcomeEmail = (email, name) => {
  console.log("This is the welcome mail ", email, name);
  client.sendEmail({
    From: "daksh.j@crestinfosystems.com",
    To: email,
    Subject: "Thanks for Joining In!",
    TextBody: `Welcome to the app,${name}. Let me know how are you?`,
  });
};
const sendDeleteEmail = (email, name) => {
  console.log("This is from Delete Mail:", email, name);
  client.sendEmail({
    From: "daksh.j@crestinfosystems.com",
    To: email,
    Subject: "Your account has been removed",
    TextBody: `Stay hard,${name}`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail,
};
// client.sendEmail({
//   From: "daksh.j@crestinfosystems.com",
//   To: "daksh.j@crestinfosystems.com",
//   Subject: "Test",
//   TextBody: "Hello from Postmark!",
// });
