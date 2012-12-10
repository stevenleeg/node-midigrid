var midi = require('midi');
var input = new midi.input();
console.log('inputs:');
for (var i = 0; i < input.getPortCount(); i++) {
  console.log(input.getPortName(i));
}
var output = new midi.output();
console.log('outputs:');
for (var i = 0; i < output.getPortCount(); i++) {
  console.log(output.getPortName(i));
}
