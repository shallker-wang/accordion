var $ = require('jquery');
var Accordion = require('./accordion');

$(function () {
  $('.component.accordion.auto-init').each(function (i, element) {
    new Accordion(element);
  });
});
