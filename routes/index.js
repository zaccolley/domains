
/*
 * GET home page.
 */

var tlds = require('./../data/tlds');

exports.index = function(req, res){
  res.render('index', { title: 'dandydomains', tlds: tlds });
};