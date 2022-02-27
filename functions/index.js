const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KWlGqSF2Kauk40NfbxudIGKcseQ5nawGhQbXi0xTXr8JuK8iPTijAjTzG53l1pJOOOAprQWrOd0F5f1kEfHjbGh00Sh1lFNTE"
);

//Api

//-App config
const app = express();

//-Middlewares

app.use(cors({ origin: true }));

app.use(express.json());

//-Api routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment Request BOOM!! for this>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //in sub unitless
    currency: "usd",
  });
  // ok-Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listeners command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-d34b8/us-central1/api
