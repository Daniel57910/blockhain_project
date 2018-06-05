var express = require('express');
var router = express.Router();
var patientSchema = require('../models/patientModel.js');

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

router.get('/sign-up-patient', function (req, res) {
  res.render('../views/patient_views/sign_up_patient');
});

router.get('/sign-in-patient', function (req, res) {
  res.render('../views/patient_views/sign_in_patient');
});

router.post('/patient_signed', function (req, res) {
  let savedPatient = new patientSchema({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    password: req.body.password
  });
  savedPatient.save(function (err, res) {
    if (err) throw "ERROR";
    console.log("SAVED\n" + savedPatient);
  });
  res.redirect('/');
});

module.exports = router;