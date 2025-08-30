const { allMoods } = require("../public/js/moodQuestions.js");
const { moodStyles } = require("../public/js/moodStyles.js");
const { moodActivities } = require("../public/js/moodActivities.js");
const {
  moodHeadings,
  moodDescription,
} = require("../public/js/moodHeadings.js");
const User = require('../models/user.js');
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");

module.exports.renderChooseMood = (req, res) => {
  if (req.isAuthenticated()) {
    res.render("pages/mood.ejs");
  }else res.redirect("/signup");
};
module.exports.chooseMood = (req, res) => {
  let mood = req.body.mood;
  res.redirect(`/mood/${mood}`);
};

module.exports.renderMoodQues = (req, res) => {
  if (req.isAuthenticated()) {
    let mood = req.params.moodName;
    let myMood = allMoods[mood];
    let myMoodStyle = moodStyles[mood];
    res.render("pages/reasons.ejs", { mood, myMood, myMoodStyle });
  }else res.redirect("/signup");
};

module.exports.moodQues = wrapAsync(async (req, res) => {
  try {
    const mood = req.params.moodName; 
    const userId = req.user._id; 
    const { reasons } = req.body;
    console.log(mood)
    console.log(userId)
    console.log(reasons)
    if (!userId || !mood || !reasons) {
      return res.status(400).json({ message: "Missing required data." });
    }

    const user = await User.findById(userId);
    if (!user) return next(new ExpressError("User not found", 404));

    const newMoodEntry = {
      mood: mood,
      reasons: reasons, 
      date: new Date(),
    };

    user.moods.push(newMoodEntry);

    await user.save();

    res.redirect(`/mood/${mood}/activities`);
  } catch (error) {
    console.error("Error saving mood:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports.renderMoodActivities = (req, res) => {
  if (req.isAuthenticated()) {
  let mood = req.params.moodName;
  let myMoodStyle = moodStyles[mood];
  let myMoodActivities = moodActivities[mood];
  let activityPageHeading = moodHeadings[mood];
  let activityPageDescription = moodDescription[mood];
  res.render("pages/activities.ejs", {
    mood,
    myMoodStyle,
    myMoodActivities,
    activityPageHeading,
    activityPageDescription,
  });
}else res.redirect("/signup");
};
