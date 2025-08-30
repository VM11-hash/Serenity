const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js")

module.exports.renderSignUp = (req, res) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  res.render("pages/signup.ejs");
};

module.exports.signUp = wrapAsync(async (req, res) => {
  let { username, age, email, password } = req.body;
  const newUser = new User({ username, email, age });
  const registeredUser =  await User.register(newUser, password);
  req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/dashboard"); 
    });
});

module.exports.renderSignIn = (req, res) => {
  res.render("pages/signin.ejs");
};

module.exports.signIn = wrapAsync(async (req, res) => {
  res.redirect("/dashboard");
});

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      next(err);
    }
  });
  res.redirect("/getStarted");
};
