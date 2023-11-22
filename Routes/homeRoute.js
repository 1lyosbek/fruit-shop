const { Router } = require("express");
const {
  getHomePage,
  getAboutPage,
  getMeals,
  getConnectUs,
  getClothes,
  getWomen,
  getMen,
  getChild,
} = require("../Controller/homeController");

const router = Router();

router.get("/about", getAboutPage);
router.get("/", getHomePage);
router.get("/meals", getMeals);
router.get("/connect", getConnectUs);
router.get("/clothes", getClothes);
router.get("/women", getWomen);
router.get("/men", getMen);
router.get("/children", getChild);

module.exports = router;
