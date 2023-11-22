const getHomePage = (req, res) => {
  res.render("home");
};

const getAboutPage = (req, res) => {
  res.render("about");
};

const getMeals = (req, res) => {
  res.render("taomlar");
};

const getConnectUs = (req, res) => {
  res.render("connectus");
};
const getClothes = (req, res) => {
  res.render("clothes");
};
const getWomen = (req, res) => {
  res.render("ayollar");
};
const getMen = (req, res) => {
  res.render("men");
};

const getChild = (req, res) => {
  res.render("children");
};

module.exports = {
  getHomePage,
  getAboutPage,
  getMeals,
  getConnectUs,
  getClothes,
  getWomen,
  getMen,
  getChild,
};
