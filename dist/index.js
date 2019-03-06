(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function chain(gql) {
    gql = Array.isArray(gql) ? gql.join('').trim() : gql;
    var payload = {
      query: gql // Ignore whitespace

    };

    var _gql$replace$match = gql.replace(/\s/g, '').match(/(query|mutation)(\(.*?\))?\{/),
        _gql$replace$match2 = _slicedToArray(_gql$replace$match, 3),
        argument = _gql$replace$match2[2];

    var obj = {
      variables: function variables(_variables) {
        payload.variables = _variables;
        return this;
      },
      toJSON: function toJSON() {
        return payload;
      }
    };

    if (argument) {
      var re = /(\$\w+)/g;
      var keys = argument.match(re);
      keys.forEach(function (key) {
        key = key.replace(/^\$/, '');

        obj[key] = function (variables) {
          if (!payload.variables) payload.variables = {};
          payload.variables[key] = variables;
          return this;
        };
      });
    }

    return obj;
  }

  module.exports = chain;

}));
