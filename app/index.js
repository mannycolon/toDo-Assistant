
(function() {
  require("babel-register")({
    extensions: [".js", ".jsx"],
    presets: ["es2015", "react"]
  });
  const ReactDOM = require('react-dom');
  const React = require('react');
  var App = {
    init: function() {
      var Application = require("./js/components/Welcome");

      ReactDOM.render(Application, document.getElementById('content'));
    }
  };
  window.App = App;
})();
document.addEventListener('DOMContentLoaded', App.init);
