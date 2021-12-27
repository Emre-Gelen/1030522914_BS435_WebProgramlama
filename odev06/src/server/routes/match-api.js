const express = require("express");
const { getRandomQuizzes } = require("../db/quizzes");
const  currentUsers  = require("../db/users");

const router = express.Router();

router.get("/matches", (req, res) => {
  if (!req.user) {
    res.status(401).send();
    return;
  }

  const payload = getRandomQuizzes(3);

  res.status(200).json(payload);
});
router.get("/users", (req, res) => {
  const victoryCount = req.query["victoryCount"];
  const defeatCount = req.query["defeatCount"];
  const firstLetter = req.query["firstLetter"];
  let payload;
  if (victoryCount && defeatCount) {
    payload = currentUsers.getUsersByDefeatCountAndVictoryCount(
      defeatCount,
      victoryCount
    );
  } else if (victoryCount) {
    payload = currentUsers.getUsersByVictoryCount(victoryCount);
  } else if (defeatCount) {
    payload = currentUsers.getUsersByDefeatCount(defeatCount);
  } else if(firstLetter) {
    payload = currentUsers.getUsersByFirstLetter();
  }
  else {
    payload = currentUsers.getUsers();
  }
  res.status(200).json(payload);
});

module.exports = router;
