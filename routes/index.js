/**
 * Created by cwklausing on 12/15/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
router.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname, '../views/index.html'));
})