(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.add = factory());
}(this, function () { 'use strict';

    function index (a, b) {
        return a + b;
    }

    return index;

}));