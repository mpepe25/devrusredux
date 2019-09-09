const router = require("express").Router();
var db = require("../models");

router.get("/events", async (req, res) => {
  try {
    const response = await db.event.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.send("error");
  }
});

router.post("/eventpage", async (req, res) => {
  try {
    const response = await db.event.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/events/delete/:id", async (req, res) => {
  try {
    const response = await db.event.destroy({ where: { id: req.params.id } });

    if (response) {
      const newArr = await db.event.findAll();
      return res.status(200).json(newArr);
    }

    throw "NO EVENT FOUND";
  } catch (error) {
    console.log(error.message);
    res.status(404).send(error);
  }
});

router.post("/users/loginOrRegister", async (req, res) => {
  try {
    const response = await db.user.findOne({ uid: req.body.uid });
    if (response) {
      return res.status(200).send(response);
    }

    const newUser = await db.user.create({
      ...req.body,
      name: req.body.displayName
    });
    return res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
