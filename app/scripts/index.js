(function ($, App) {

  App.Greeting = App.Greeting || function () {
    // pass
  };

  App.Greeting.prototype = {
    constructor: App.Greeting,
    sayHi: function (name) {
      return 'Hi ' + name;
    }
  }

  // add some awesome stuffs here

})(window.jQuery, window.App = window.App || {});
