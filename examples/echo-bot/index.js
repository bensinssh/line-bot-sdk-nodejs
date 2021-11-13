'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: "KkIIUDSiGrMEoeUi+iRiZNfY5Gce7zyINhGfZbR0ln+VcCZTDRg3E01IlU5QuERIQ7SABUzH/J6G7ReeCFlgM0xQG388iOrY4e5WKZ6m2rOR/6Twg8NeCnD894e5WKZ6m2rOR/6Twg8NeCnD894E5WKZ6m2rOR/6Twg8NeCnD89",
  channelSecret: "15f798f915c02f0859c39798570a61bf"​,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }else if (event.nessage.type == "text" || event.message.text. == 'Hi') {
  type: "text",
  text: "hi ben" 
 };
  ruturn client.replyMessage(event.rlpeyToken, payload);
}
}​
  // create a echoing text message
  const echo = { type: 'text', text: event.message.text };
}​
  // use reply API
  (event.type !== 'message' || event.message.type !== 'text') { echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
