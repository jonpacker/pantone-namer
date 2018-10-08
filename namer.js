const chroma = require('chroma-js');
const pantone = require('./pantone');
module.exports = input => {
  input = chroma(input);
  return (
    pantone
    .map(color => ({ name: color.name, distance: chroma.distance(input, color.color) }))
    .sort((a, b) => a.distance - b.distance)
    [0].name
  );
}
