define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('large-plugin', function (builder) {
      return builder.boxes(20);
    });

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n\n  <box-one></box-one>\n  <box-two></box-two>\n  <box-three></box-three>\n  <box-four></box-four>\n  <box-five></box-five>\n  <box-six></box-six>\n  <box-seven></box-seven>\n  <box-eight></box-eight>\n  <box-nine></box-nine>\n  <box-ten></box-ten>\n  <box-eleven></box-eleven>\n  <box-twelve></box-twelve>\n  <box-thirteen></box-thirteen>\n  <box-fourteen></box-fourteen>\n  <box-fifteen></box-fifteen>\n  <box-sixteen></box-sixteen>\n  <box-seventeen></box-seventeen>\n  <box-eighteen></box-eighteen>\n  <box-nineteen></box-nineteen>\n  <box-twenty></box-twenty>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map