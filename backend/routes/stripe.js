const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51L1sP1SJhCoUTdrkp7BzKj8FQZ130toWDALmo4kWJ8NoK7eEhudp4rFzLnKH6sfby4IW9ajO4cUXh7KeXzYycHIZ00gjNZdQo9"
);
const uuid = require("uuid").v4;

router.post("/payment", (req, res) => {
  // to charge our client, create charge.
  token = req.body.tokenId;
  console.log("request received", token);
  const idempontencyKey = uuid();
  // stripe.customers
  //   .create({
  //     email: token.email,
  //     source: token,
  //   })
  //   .then((customer) =>
  //     stripe.charges.create(
  //       {
  //         amount: req.body.amount,
  //         currency: "usd",
  //         customer: customer.id,
  //         // receipt_email: token.email,
  //         // description: product.name,
  //         // shipping: {
  //         //   name: token.card.name,
  //         // },s
  //       },
  //       (err, result) => {
  //         if (err) {
  //           res.status(500).send(err);
  //         } else {
  //           res.status(200).send(result);
  //         }
  //       }
  //     )
  //   );

  // stripe.paymentIntents.create(
  //   {
  //     // source: req.body.tokenId, // when we make payment, stripe returns us token id
  //     amount: req.body.amount,
  //     currency: "usd",
  //   },
  //   (err, result) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(200).send(result);
  //     }
  //   }
  // );
});

module.exports = router;
