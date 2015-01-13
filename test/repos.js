clone = require('../bin/clone');

var repos = [
   'git@github.com:jashkenas/underscore.git'
];

var dir = "./../modules/"

clone(repos[0], '../modules/', function(){});
