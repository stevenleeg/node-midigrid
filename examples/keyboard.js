var midigrid = require('../lib/midigrid.js');

// create a midigrid device
var device = midigrid.create({
  id: 'keyboardgrid',
  name: 'monome 64 (k0000001)',
  prefix: '/keyboardgrid',
  // set these to valid midi devices, use listmidi.js to see what you have
  midiIn: 'LPK25',
  midiOut: 'IAC Driver IAC Bus 2',

  // this should map a midi note number to an x/y coordinate
  serialoscMapFunc: function(noteNum) {
    var x = noteNum % device.sizeX;
    var y = Math.floor(noteNum / device.sizeX);
    console.log('press event: converted note ' + noteNum + ' to ' + x + ', ' + y)
    return [x, y];
  },

  // this should map an x/y coordinate to a midi note number
  midiMapFunc: function(data) {
    var noteNum = data.x + (data.y * device.sizeX);
    console.log('led event: converted ' + data.x + ', ' + data.y + ' to note ' + noteNum);
    return noteNum;
  },

  // the velocity to use when turning a led on
  velocityOn: function(data) {
    return 127;
  },
  
  // the velocity to use when turning a led off
  velocityOff: function(data) {
    return 0;
  }
});

device.start();

var stdin = process.openStdin();