/*jslint node: true */
'use strict';
/*
var startSimulator = require('node-firefox-start-simulator');
var connect = require('node-firefox-connect');

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('fxos:v22',function(){
  startSimulator({
    verbose: true,
    version: '2.2'
  }).then(function(simulator) {
      connect(simulator.port).then(function(client) {
        //console.log('client', client)
        client.getWebapps(function(err, webapps) {
          //console.log('webapps', webapps, err)
           setTimeout(function(){
            client.getWebapps(function(err, webapps) {
              webapps.listRunningApps(function(err, apps) {
                //console.log('Running apps:', apps);
                //client.disconnect();
                //process.kill(simulator.pid);
              });
            });
           } ,1000);
      });
    });
  });
});
*/
