// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/lib/people.json":[function(require,module,exports) {
module.exports = [{
  "name": "Carolus Haverbeke",
  "sex": "m",
  "born": 1832,
  "died": 1905,
  "fatherName": "Carel Haverbeke",
  "motherName": "Maria van Brussel",
  "slug": "carolus-haverbeke-1832"
}, {
  "name": "Emma de Milliano",
  "sex": "f",
  "born": 1876,
  "died": 1956,
  "fatherName": "Petrus de Milliano",
  "motherName": "Sophia van Damme",
  "slug": "emma-de-milliano-1876"
}, {
  "name": "Maria de Rycke",
  "sex": "f",
  "born": 1683,
  "died": 1724,
  "fatherName": "Frederik de Rycke",
  "motherName": "Laurentia van Vlaenderen",
  "slug": "maria-de-rycke-1683"
}, {
  "name": "Jan van Brussel",
  "sex": "m",
  "born": 1714,
  "died": 1748,
  "fatherName": "Jacobus van Brussel",
  "motherName": "Joanna van Rooten",
  "slug": "jan-van-brussel-1714"
}, {
  "name": "Philibert Haverbeke",
  "sex": "m",
  "born": 1907,
  "died": 1997,
  "fatherName": "Emile Haverbeke",
  "motherName": "Emma de Milliano",
  "slug": "philibert-haverbeke-1907"
}, {
  "name": "Jan Frans van Brussel",
  "sex": "m",
  "born": 1761,
  "died": 1833,
  "fatherName": "Jacobus Bernardus van Brussel",
  "motherName": null,
  "slug": "jan-frans-van-brussel-1761"
}, {
  "name": "Pauwels van Haverbeke",
  "sex": "m",
  "born": 1535,
  "died": 1582,
  "fatherName": "N. van Haverbeke",
  "motherName": null,
  "slug": "pauwels-van-haverbeke-1535"
}, {
  "name": "Clara Aernoudts",
  "sex": "f",
  "born": 1918,
  "died": 2012,
  "fatherName": "Henry Aernoudts",
  "motherName": "Sidonie Coene",
  "slug": "clara-aernoudts-1918"
}, {
  "name": "Emile Haverbeke",
  "sex": "m",
  "born": 1877,
  "died": 1968,
  "fatherName": "Carolus Haverbeke",
  "motherName": "Maria Sturm",
  "slug": "emile-haverbeke-1877"
}, {
  "name": "Lieven de Causmaecker",
  "sex": "m",
  "born": 1696,
  "died": 1724,
  "fatherName": "Carel de Causmaecker",
  "motherName": "Joanna Claes",
  "slug": "lieven-de-causmaecker-1696"
}, {
  "name": "Pieter Haverbeke",
  "sex": "m",
  "born": 1602,
  "died": 1642,
  "fatherName": "Lieven van Haverbeke",
  "motherName": null,
  "slug": "pieter-haverbeke-1602"
}, {
  "name": "Livina Haverbeke",
  "sex": "f",
  "born": 1692,
  "died": 1743,
  "fatherName": "Daniel Haverbeke",
  "motherName": "Joanna de Pape",
  "slug": "livina-haverbeke-1692"
}, {
  "name": "Pieter Bernard Haverbeke",
  "sex": "m",
  "born": 1695,
  "died": 1762,
  "fatherName": "Willem Haverbeke",
  "motherName": "Petronella Wauters",
  "slug": "pieter-bernard-haverbeke-1695"
}, {
  "name": "Lieven van Haverbeke",
  "sex": "m",
  "born": 1570,
  "died": 1636,
  "fatherName": "Pauwels van Haverbeke",
  "motherName": "Lievijne Jans",
  "slug": "lieven-van-haverbeke-1570"
}, {
  "name": "Joanna de Causmaecker",
  "sex": "f",
  "born": 1762,
  "died": 1807,
  "fatherName": "Bernardus de Causmaecker",
  "motherName": null,
  "slug": "joanna-de-causmaecker-1762"
}, {
  "name": "Willem Haverbeke",
  "sex": "m",
  "born": 1668,
  "died": 1731,
  "fatherName": "Lieven Haverbeke",
  "motherName": "Elisabeth Hercke",
  "slug": "willem-haverbeke-1668"
}, {
  "name": "Pieter Antone Haverbeke",
  "sex": "m",
  "born": 1753,
  "died": 1798,
  "fatherName": "Jan Francies Haverbeke",
  "motherName": "Petronella de Decker",
  "slug": "pieter-antone-haverbeke-1753"
}, {
  "name": "Maria van Brussel",
  "sex": "f",
  "born": 1801,
  "died": 1834,
  "fatherName": "Jan Frans van Brussel",
  "motherName": "Joanna de Causmaecker",
  "slug": "maria-van-brussel-1801"
}, {
  "name": "Angela Haverbeke",
  "sex": "f",
  "born": 1728,
  "died": 1734,
  "fatherName": "Pieter Bernard Haverbeke",
  "motherName": "Livina de Vrieze",
  "slug": "angela-haverbeke-1728"
}, {
  "name": "Elisabeth Haverbeke",
  "sex": "f",
  "born": 1711,
  "died": 1754,
  "fatherName": "Jan Haverbeke",
  "motherName": "Maria de Rycke",
  "slug": "elisabeth-haverbeke-1711"
}, {
  "name": "Lievijne Jans",
  "sex": "f",
  "born": 1542,
  "died": 1582,
  "fatherName": null,
  "motherName": null,
  "slug": "lievijne-jans-1542"
}, {
  "name": "Bernardus de Causmaecker",
  "sex": "m",
  "born": 1721,
  "died": 1789,
  "fatherName": "Lieven de Causmaecker",
  "motherName": "Livina Haverbeke",
  "slug": "bernardus-de-causmaecker-1721"
}, {
  "name": "Jacoba Lammens",
  "sex": "f",
  "born": 1699,
  "died": 1740,
  "fatherName": "Lieven Lammens",
  "motherName": "Livina de Vrieze",
  "slug": "jacoba-lammens-1699"
}, {
  "name": "Pieter de Decker",
  "sex": "m",
  "born": 1705,
  "died": 1780,
  "fatherName": "Joos de Decker",
  "motherName": "Petronella van de Steene",
  "slug": "pieter-de-decker-1705"
}, {
  "name": "Joanna de Pape",
  "sex": "f",
  "born": 1654,
  "died": 1723,
  "fatherName": "Vincent de Pape",
  "motherName": "Petronella Wauters",
  "slug": "joanna-de-pape-1654"
}, {
  "name": "Daniel Haverbeke",
  "sex": "m",
  "born": 1652,
  "died": 1723,
  "fatherName": "Lieven Haverbeke",
  "motherName": "Elisabeth Hercke",
  "slug": "daniel-haverbeke-1652"
}, {
  "name": "Lieven Haverbeke",
  "sex": "m",
  "born": 1631,
  "died": 1676,
  "fatherName": "Pieter Haverbeke",
  "motherName": "Anna van Hecke",
  "slug": "lieven-haverbeke-1631"
}, {
  "name": "Martina de Pape",
  "sex": "f",
  "born": 1666,
  "died": 1727,
  "fatherName": "Vincent de Pape",
  "motherName": "Petronella Wauters",
  "slug": "martina-de-pape-1666"
}, {
  "name": "Jan Francies Haverbeke",
  "sex": "m",
  "born": 1725,
  "died": 1779,
  "fatherName": "Pieter Bernard Haverbeke",
  "motherName": "Livina de Vrieze",
  "slug": "jan-francies-haverbeke-1725"
}, {
  "name": "Maria Haverbeke",
  "sex": "m",
  "born": 1905,
  "died": 1997,
  "fatherName": "Emile Haverbeke",
  "motherName": "Emma de Milliano",
  "slug": "maria-haverbeke-1905"
}, {
  "name": "Petronella de Decker",
  "sex": "f",
  "born": 1731,
  "died": 1781,
  "fatherName": "Pieter de Decker",
  "motherName": "Livina Haverbeke",
  "slug": "petronella-de-decker-1731"
}, {
  "name": "Livina Sierens",
  "sex": "f",
  "born": 1761,
  "died": 1826,
  "fatherName": "Jan Sierens",
  "motherName": "Maria van Waes",
  "slug": "livina-sierens-1761"
}, {
  "name": "Laurentia Haverbeke",
  "sex": "f",
  "born": 1710,
  "died": 1786,
  "fatherName": "Jan Haverbeke",
  "motherName": "Maria de Rycke",
  "slug": "laurentia-haverbeke-1710"
}, {
  "name": "Carel Haverbeke",
  "sex": "m",
  "born": 1796,
  "died": 1837,
  "fatherName": "Pieter Antone Haverbeke",
  "motherName": "Livina Sierens",
  "slug": "carel-haverbeke-1796"
}, {
  "name": "Elisabeth Hercke",
  "sex": "f",
  "born": 1632,
  "died": 1674,
  "fatherName": "Willem Hercke",
  "motherName": "Margriet de Brabander",
  "slug": "elisabeth-hercke-1632"
}, {
  "name": "Jan Haverbeke",
  "sex": "m",
  "born": 1671,
  "died": 1731,
  "fatherName": "Lieven Haverbeke",
  "motherName": "Elisabeth Hercke",
  "slug": "jan-haverbeke-1671"
}, {
  "name": "Anna van Hecke",
  "sex": "f",
  "born": 1607,
  "died": 1670,
  "fatherName": "Paschasius van Hecke",
  "motherName": "Martijntken Beelaert",
  "slug": "anna-van-hecke-1607"
}, {
  "name": "Maria Sturm",
  "sex": "f",
  "born": 1835,
  "died": 1917,
  "fatherName": "Charles Sturm",
  "motherName": "Seraphina Spelier",
  "slug": "maria-sturm-1835"
}, {
  "name": "Jacobus Bernardus van Brussel",
  "sex": "m",
  "born": 1736,
  "died": 1809,
  "fatherName": "Jan van Brussel",
  "motherName": "Elisabeth Haverbeke",
  "slug": "jacobus-bernardus-van-brussel-1736"
}];
},{}],"scripts/main.js":[function(require,module,exports) {
'use strict';

var people = require('./lib/people.json');
var table = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
// option 1:

// const insertRows = (peopleArray) => {
//     peopleArray.forEach(person => {

//         const gender = person.sex === 'm' ? 'male'
//             : 'female';
//         const age = person.died - person.born;
//         const century = Math.ceil(person.died / 100);

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${person.name}</td>
//             <td>${gender}</td>
//             <td>${person.born}</td>
//             <td>${person.died}</td>
//             <td>${age}</td>
//             <td>${century}</td>
//         `;

//         table.appendChild(row);
//     });

// }

// option 2:

var insertRows = function insertRows(peopleArray) {
  peopleArray.forEach(function (person) {
    var gender = person.sex === 'm' ? 'male' : 'female';
    var age = person.died - person.born;
    var century = Math.ceil(person.died / 100);
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var genderCell = document.createElement('td');
    var bornCell = document.createElement('td');
    var diedCell = document.createElement('td');
    var ageCell = document.createElement('td');
    var centuryCell = document.createElement('td');
    nameCell.textContent = person.name;
    genderCell.textContent = gender;
    bornCell.textContent = person.born;
    diedCell.textContent = person.died;
    ageCell.textContent = age;
    centuryCell.textContent = century;
    row.append(nameCell, genderCell, bornCell, diedCell, ageCell, centuryCell);
    table.appendChild(row);
  });
};
insertRows(people);
},{"./lib/people.json":"scripts/lib/people.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55030" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/main.js"], null)
//# sourceMappingURL=/main.d8ebb8d6.js.map