//
// Available modules include (this is not a complete list):
// var Scene = require('Scene');
// var Textures = require('Textures');
// var Materials = require('Materials');
// var FaceTracking = require('FaceTracking');
// var Animation = require('Animation');
// var Reactive = require('Reactive');
//
// Example script
//
// Loading required modules
// var Scene = require('Scene');
// var FaceTracking = require('FaceTracking');
//
// Binding an object's property to a value provided by the face tracker
// Scene.root.child('object0').transform.rotationY = FaceTracking.face(0).transform.rotationX;
//
// If you want to log objects, use the Diagnostics module.
// var Diagnostics = require('Diagnostics');
// Diagnostics.log(Scene.root);

var Animation = require('Animation');
var FaceTracking = require('FaceTracking');
var Scene = require('Scene');

const Time = require('Time');
const Diagnostics = require('Diagnostics');

var ft = Scene.root.child("Device").child("Camera").child("Focal Distance").child("canvas0");


Time.setTimeout(
    function (elapsedTime) {
        ft.visibility = false;
    }, 5000);


