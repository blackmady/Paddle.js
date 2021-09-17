(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(function () {
      return (root.cv = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else if (typeof window === 'object') {
    // Browser globals
    root.cv = factory();
  } else if (typeof importScripts === 'function') {
    // Web worker
    root.cv = factory;
  } else {
    // Other shells, e.g. d8
    root.cv = factory();
  }
}(this, function () {
  
var cv = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(cv) {
  cv = cv || {};



  return cv;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = cv;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return cv; });
    else if (typeof exports === 'object')
      exports["cv"] = cv;
    
  if (typeof Module === 'undefined')
    Module = {};
  return cv(Module);
}));
    