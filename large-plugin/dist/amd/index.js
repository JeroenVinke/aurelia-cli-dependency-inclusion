define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  function configure(aurelia, configCallback) {
    var boxesCount = 20;

    var builder = {
      boxes: (count) => boxesCount = count
    };

    configCallback(builder);

    let boxes = [];
    for(var i = 1; i <= boxesCount; i++) {
      boxes.push('./box/box' + i);
    }
    aurelia.globalResources(boxes);
  }
});