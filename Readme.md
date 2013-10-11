accordion
==========

Component accordion.

## Installation
```
$ component install shallker-wang/accordion
```

## Quick Start
```javascript
var Accordion = require('accordion');
var $ = require('jquery')

$(function () {
  $('.component.accordion').each(function (i, el) {
    var accordion = new Accordion(el);
  }); 
});
```

## API

#### accordion.close()

#### accordion.open()

#### accordion.activate()

#### accordion.deactivate()


## Test
http://shallker-wang.github.io/accordion/test/index.html   

## Todo
- add sliding animation

## License

  MIT
