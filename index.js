'use strict';

var moment = require('moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = fuction (name) {
    return "Copyright" + moment().format('YYYY') + " " + name + " All rights reserved";
};