'use strict';

var Q       = require('q');
var scrap   = require('scrap');


/**
 * getData - passes in the config object from the client.
 * This function MUST exist and MUST return a promise.
 */
exports.getData = function(obj) {

    var deferred = Q.defer();

    var settings = obj.settings;
    var data = obj.data;

    var output = {};

    for(var i = 0; i<data.length; i++){

        var dataObj = data[i];

        for(prop in dataObj){
            output[prop] = dataObj[prop];
        }

    }

    deferred.resolve(output);


    // Always return your promise here.
    return deferred.promise;

};

exports.getData();


