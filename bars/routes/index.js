const express = require('express');
const router = express.Router();
const Bar = require("../models/Bar")

/* GET home page */
router.get('/map', (req, res, next) => {
  Bar
  .find()
  .then(allBars => {
    res.render('map', { allBars })
  })
});

router.get("/getBarInfo/:id", (req, res) => {
  Bar
    .findById(req.params.id)
    .then(selectedBar => {
      res.json({selectedBar})
    })
})

router.get('/allBars', (req, res) => {
  Bar
    .find()
    .then(allBars => {
      res.render('allBars', { allBars })
    })
})

router.get('/allBarsInJSON', (req, res) => {
  Bar
    .find()
    .then(allBars => {
      res.json(allBars)
    })
})

router.get('/add-bar', (req, res, next) => {
  res.render('add-bar');
});

router.post('/add-bar', (req, res, next) => {
  Bar
    .create({
      name: req.body.name,
      description: req.body.description,
      location: { 
        type: 'Point', 
        coordinates: [+req.body.longitude, +req.body.latitude] 
      }
    })
    .then(createdBar => {
      res.redirect('/allBars')
    })
});

module.exports = router;
