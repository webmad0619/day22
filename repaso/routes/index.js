const express = require('express');
const router  = express.Router();

function increaseAge(age) {
  return age + 1
}

/* GET home page */
router.get('/show-all-products', (req, res, next) => {
  res.render('sections/products/products-list', {age: increaseAge(39), name: "dani"});
});

router.get('/repaso', (req, res, next) => {
  res.render('prueba-repaso', {age: increaseAge(39), name: "dani"});
});

router.get('/franch/:id', (req, res, next) => {
  res.render('parameters', {passValue: req.params.id, edit: false});
});

router.get('/franch/:id/edit', (req, res, next) => {
  res.render('parameters', {passValue: req.params.id, edit: true});
});

router.get('/create-book', (req, res, next) => {
  res.render('create-book');
});

router.post('/new-product', (req, res, next) => {
  res.json({
    bookCreated: true, 
    name: req.body["book-name"],
    authorFullname: req.body["book-author"] + " " + req.body["book-author-surname"],
    price: +req.body["book-price"] * 1.16,
    id: req.body["book-id"]
  })
});







module.exports = router;
