const router = require("express").Router();
//login
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.EMAIL && password === process.env.PASSWORD) {
    res.status(200).json("Authentication successful");
  } else {
    res.status(401).json("Incorrect username or password");
  }
});
module.exports = router;
