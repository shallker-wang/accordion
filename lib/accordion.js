var $ = require('jquery');
var eventy = require('eventy');

module.exports = function Accordion(el) {
  var accordion = function () {
    this.el = el;
    $(this.el).on('click', '>.header', onClickHeader);
    return this;
  }.call(eventy(el));

  function stopEvent(ev) {
    ev.stopPropagation();
    ev.preventDefault();
  }

  function onClickHeader(click) {
    stopEvent(click);
    accordion.toggle();
  }

  function closeSiblings() {
    $(el).siblings('.component.accordion').each(function (i, el) {
      el.deactivate();
    });
  }

  accordion.toggle = function () {
    if ($(this.el).hasClass('active')) return this.deactivate();
    if ($(this.el).hasClass('solitary')) closeSiblings();
    return this.activate();
  }

  accordion.open = function () {
    $(this.el).removeClass('close');
    $(this.el).addClass('open');
    this.trigger('open');
  }

  accordion.close = function () {
    $(this.el).removeClass('open');
    $(this.el).addClass('close');
    this.trigger('close');
  }

  accordion.activate = function () {
    $(this.el).addClass('active');
    this.trigger('activate');
    this.open();
  }

  accordion.deactivate = function () {
    $(this.el).removeClass('active');
    this.trigger('deactivate');
    this.close();
  }

  return accordion;
}
