#!/usr/bin/env node

var net = require("net"),
    repl = require("repl");

//A "local" node repl with a custom prompt
var local = repl.start("socoded λ lichterwahn >");

// Exposing the function "mood" to the local REPL's context.
var lights = require('../lib/client');
local.context.lights = function(i,r,g,b) {
  lights(i,r,g,b)
  return 'Set led ' + i + ' to R: ' + r + ' G: ' + g + ' B: '+ b;
}
