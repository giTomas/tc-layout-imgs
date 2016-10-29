'use strict';

// utils

var isObject = function isObject(elem) {
    var getType = function getType(el) {
        return Object.prototype.toString.call(el).slice(8, -1);
    };
    return getType(elem) === 'Object';
};

function forEachEl_2(els, fn) {
    var len = els.length;
    for (var i = 0; i < len; i++) {
        if (els[i]) {
            els[i].addEventListener('click', fn, false);
        }
    }
}

function forEachEl(els, fn) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;
            if (el) {
                el.addEventListener('click', fn, false);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function findData(arr, prop, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === data) {
            return arr[i];
        }
    }
}

// definitly in this case this is better, it's faster, more concise, not so complicated
// BEAWARE probably if array contains more identical properties it will return array
// traverse whole array callback is executed for every item in array
// IE not support
function findValue(_ref) {
    var arr = _ref.arr;
    var _ref$prop = _ref.prop;
    var prop = _ref$prop === undefined ? 'id' : _ref$prop;
    var data = _ref.data;

    return arr.find(function (el, i) {
        return el[prop] === data;
    });
}

//NEAT!!!
// maps array -> make new array from properties
// indexing array of these properties
// use index to find object in array
// probably works in most browsers
function findValueByIndex(arr, prop, val) {
    return arr[arr.map(function (el) {
        return el[prop];
    }).indexOf(val)];
}

//haluz ale je to dost DIRTY; Note comma operator!
function findValue2(arr, prop, data) {
    var result = null;
    arr.some(function (el, i) {
        return el[prop] === data ? (result = el, true) : false;
    });
    return result;
}

//function overloading

var dispatch = function dispatch() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
    }

    return function () {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = fns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var fn = _step2.value;

                var result = fn.apply(undefined, arguments);
                if (exists(result)) {
                    return result;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    };
};

function exists(value) {
    return value !== undefined;
}

//function composition
var compose = function compose() {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
    }

    return function (value) {
        return funcs.reduce(function (v, fn) {
            return fn(v);
        }, value);
    };
};

//markup
var createMarkup = compose(findValue, Tmps.markupProfiles);